import { Subject } from "rxjs";
import { INotifierEvent, INotifierMessage, INotifierOptions } from "./notifier.model";
export declare class NotifierService {
    private emitter;
    private icons;
    private options;
    constructor();
    getEmitter(): Subject<INotifierEvent>;
    getOptions(): INotifierOptions;
    set(message: INotifierMessage): INotifierMessage;
    info(content: string, title?: string): INotifierMessage;
    success(content: string, title?: string): INotifierMessage;
    error(content: string, title?: string): INotifierMessage;
    alert(content: string, title?: string): INotifierMessage;
    remove(message?: INotifierMessage): void;
    attachPersonalOptions(options: any): void;
}
