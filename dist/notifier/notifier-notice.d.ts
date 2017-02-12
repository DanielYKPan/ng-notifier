export declare class Notice {
    id: string;
    type: string;
    title: string;
    content: string;
    icon: string;
    state: string;
    config: any;
    constructor(type: string, content: string, title?: string, icon?: string);
}
