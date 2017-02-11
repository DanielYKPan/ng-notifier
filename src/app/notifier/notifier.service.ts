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
import { uuid } from "./uuid";
import { INotifierMessage } from "./notifier.model";
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

    set( message: INotifierMessage ): INotifierMessage {

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
        if (!message.id) {
            message.id = uuid();
        }
        this.container.instance.addNotice(message);
        return message;
    }

    dispose(): void {
        if (this.container && !this.container.instance.anyNotices()) {
            this.container.destroy();
            this.container = null;
            return;
        }
        return;
    }

    clear( notice?: INotifierMessage ): void {
        if (!this.container) return;
        this.container.instance.removeNotice(notice);
        if(!this.container.instance.anyNotices()){
            this.dispose();
        }
    }

    info( content: string, title?: string ) {
        let message = {
            title: title,
            content: content,
            type: 'primary',
            icon: this.icons.info,
        };
        return this.set(message);
    }

    success( content: string, title?: string ) {
        let message = {
            title: title,
            content: content,
            type: 'success',
            icon: this.icons.success,
        };
        return this.set(message);
    }

    error( content: string, title?: string ) {
        let message = {
            title: title,
            content: content,
            type: 'danger',
            icon: this.icons.error,
        };
        return this.set(message);
    }

    alert( content: string, title?: string ) {
        let message = {
            title: title,
            content: content,
            type: 'warning',
            icon: this.icons.alert,
        };
        return this.set(message);
    }
}
