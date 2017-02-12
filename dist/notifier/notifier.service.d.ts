import { ComponentRef, ViewContainerRef, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { Notice } from "./notifier-notice";
import { NotifierOptions } from "./notifier-options.service";
export declare class NotifierService {
    private componentFactoryResolver;
    private appRef;
    container: ComponentRef<any>;
    private icons;
    private options;
    private _rootViewContainerRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, options: NotifierOptions);
    setRootViewContainerRef(vRef: ViewContainerRef): void;
    set(notice: Notice, options?: Object): Notice;
    dispose(): void;
    clear(notice?: Notice): void;
    info(content: string, title?: string, options?: Object): Notice;
    success(content: string, title?: string, options?: Object): Notice;
    error(content: string, title?: string, options?: Object): Notice;
    alert(content: string, title?: string, options?: Object): Notice;
}
