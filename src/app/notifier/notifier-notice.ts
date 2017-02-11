/**
 * notification.model
 */

export interface INotice {
    id?: string;
    type: string;
    title?: string;
    content?: string;
    icon: string;
    state?: string;
}
