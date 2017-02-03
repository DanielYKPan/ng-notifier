/**
 * notification.model
 */

export interface INotifierMessage {
    id?: string;
    type: string;
    title?: string;
    content?: string;
    icon: string;
    state?: string;
}

export interface INotifierEvent {
    command: string;
    message?: INotifierMessage;
}

export  interface INotifierOptions {
    animate?: 'fromRight' | 'fromLeft' | 'rotate' | 'scale';
    clickToClose?: boolean;
    maxStack?: number;
    pauseOnHover?: boolean;
    position?: ['top' | 'bottom', 'right' | 'left' | 'center'];
    timeDelay?: number;
    theClass?: string;
}
