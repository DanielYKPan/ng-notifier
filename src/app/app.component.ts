/**
 * app.component
 */

import { Component, OnInit } from "@angular/core";

import '../sass/main.scss';
import { NotificationService } from 'ng2-yk-notifier';

@Component({
    selector: 'yk-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor( private service: NotificationService ) {
    }

    ngOnInit(): void {
    }

    add() {
        this.service.success('hello world', 'Angular Message');
    }
}
