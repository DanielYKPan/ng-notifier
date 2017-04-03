import { ViewContainerRef, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { Notice } from './notifier-notice';
import { NotifierOptions } from './notifier-options.service';
export declare class NotifierService {
    private componentFactoryResolver;
    private appRef;
    private container;
    private icons;
    private options;
    private _rootViewContainerRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, options: NotifierOptions);
    setRootViewContainerRef(vRef: ViewContainerRef): void;
    clear(notice?: Notice): void;
    info(content: string, title?: string, options?: Object): Notice;
    success(content: string, title?: string, options?: Object): Notice;
    error(content: string, title?: string, options?: Object): Notice;
    alert(content: string, title?: string, options?: Object): Notice;
    private set(notice, options?);
    private dispose();
}
