/**
 * app.component
 */

import { Component, OnInit } from "@angular/core";
import { NotificationService } from "./notification/notification.service";
//import { NotificationsService } from "./sn/notifications.service";

import '../sass/main.scss';

@Component({
    selector: 'yk-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    private test = 1;

    constructor( private notificationService: NotificationService ) {
    }

    ngOnInit(): void {
    }

    add() {
        this.notificationService.success('Hello World ' + this.test, 'Angular Message:');
        this.test += 1;
    }
}
