import { Subject } from "rxjs";
import { INotificationEvent, IMessage, IOptions } from "./notification.model";
export declare class NotificationService {
    private emitter;
    private icons;
    private options;
    constructor();
    getEmitter(): Subject<INotificationEvent>;
    getOptions(): IOptions;
    set(message: IMessage): IMessage;
    info(content: string, title?: string): IMessage;
    success(content: string, title?: string): IMessage;
    error(content: string, title?: string): IMessage;
    alert(content: string, title?: string): IMessage;
    remove(message?: IMessage): void;
    attachPersonalOptions(options: any): void;
}
