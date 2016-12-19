/**
 * notification.model
 */

export interface IMessage {
    id?: string;
    type: string;
    title?: string;
    content?: string;
    icon: string;
    state: string;
}

export interface INotificationEvent {
    command: string;
    message? : IMessage;
}
