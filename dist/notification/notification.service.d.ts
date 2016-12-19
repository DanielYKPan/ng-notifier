import { Subject } from "rxjs";
import { INotificationEvent, IMessage } from "./notification.model";
export declare class NotificationService {
    private emitter;
    private icons;
    constructor();
    getEmitter(): Subject<INotificationEvent>;
    set(message: IMessage): IMessage;
    success(title: string, content: string): IMessage;
    remove(message?: IMessage): void;
}
