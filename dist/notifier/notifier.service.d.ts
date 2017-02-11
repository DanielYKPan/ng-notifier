import { ComponentRef, ViewContainerRef, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { INotifierMessage } from "./notifier.model";
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
    set(message: INotifierMessage): INotifierMessage;
    dispose(): void;
    clear(notice?: INotifierMessage): void;
    info(content: string, title?: string): INotifierMessage;
    success(content: string, title?: string): INotifierMessage;
    error(content: string, title?: string): INotifierMessage;
    alert(content: string, title?: string): INotifierMessage;
}
