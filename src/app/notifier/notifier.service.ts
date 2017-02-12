/**
 * notification.service
 */

import {
    Injectable,
    ComponentRef,
    ViewContainerRef,
    ComponentFactoryResolver,
    ApplicationRef,
    Optional,
    ReflectiveInjector
} from '@angular/core';
import { Notice } from "./notifier-notice";
import { Icons, defaultIcons } from './icons';
import { NotifierOptions } from "./notifier-options.service";
import { NotifierContainerComponent } from "./notifier-container.component";

@Injectable()
export class NotifierService {

    container: ComponentRef<any>;

    private icons: Icons = defaultIcons;
    private options: any = {};
    private _rootViewContainerRef: ViewContainerRef;

    constructor( private componentFactoryResolver: ComponentFactoryResolver,
                 private appRef: ApplicationRef,
                 @Optional() options: NotifierOptions ) {
        if (options) {
            Object.assign(this.options, options);
        }
    }

    setRootViewContainerRef( vRef: ViewContainerRef ) {
        this._rootViewContainerRef = vRef;
    }

    set( notice: Notice, options?: Object ): Notice {

        if (!this.container) {
            // get app root view component ref
            if (!this._rootViewContainerRef) {
                try {
                    this._rootViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
                } catch (e) {
                    console.log(new Error('Please set root ViewContainerRef using setRootViewContainerRef(vRef: ViewContainerRef) method.'));
                }
            }

            // get options providers
            let providers = ReflectiveInjector.resolve([
                {provide: NotifierOptions, useValue: <NotifierOptions>this.options}
            ]);

            let notifierFactory = this.componentFactoryResolver.resolveComponentFactory(NotifierContainerComponent);
            let childInjector = ReflectiveInjector.fromResolvedProviders(providers, this._rootViewContainerRef.parentInjector);
            this.container = this._rootViewContainerRef.createComponent(notifierFactory, this._rootViewContainerRef.length, childInjector);
        }

        Object.keys(notice.config).forEach(k => {
            if (this.options.hasOwnProperty(k)) {
                notice.config[k] = this.options[k];
            }

            if (options && options.hasOwnProperty(k)) {
                notice.config[k] = options[k];
            }
        });

        this.container.instance.addNotice(notice);
        return notice;
    }

    dispose(): void {
        if (this.container && !this.container.instance.anyNotices()) {
            this.container.destroy();
            this.container = null;
            return;
        }
        return;
    }

    clear( notice?: Notice ): void {
        if (!this.container) return;
        this.container.instance.removeNotice(notice);
        if(!this.container.instance.anyNotices()){
            this.dispose();
        }
    }

    info( content: string, title?: string, options?: Object ) {
        let notice = new Notice('primary', content, title, this.icons.info);
        return this.set(notice, options);
    }

    success( content: string, title?: string, options?: Object ) {
        let notice = new Notice('success', content, title, this.icons.success);
        return this.set(notice, options);
    }

    error( content: string, title?: string, options?: Object ) {
        let notice = new Notice('danger', content, title, this.icons.error);
        return this.set(notice, options);
    }

    alert( content: string, title?: string, options?: Object ) {
        let notice = new Notice('warning', content, title, this.icons.alert);
        return this.set(notice, options);
    }
}
