/**
 * notification.model
 */

export interface IMessage {
    id?: string;
    type: string;
    title?: string;
    content?: string;
    icon: string;
    state?: string;
}

export interface INotificationEvent {
    command: string;
    message?: IMessage;
}

export  interface IOptions {
    animate?: 'fromRight' | 'fromLeft' | 'rotate' | 'scale';
    clickToClose?: boolean;
    maxStack?: number;
    pauseOnHover?: boolean;
    position?: ['top' | 'bottom', 'right' | 'left'];
    timeDelay?: number;
    theClass?: string;
}
