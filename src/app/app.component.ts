/**
 * app.component
 */

import { Component, OnInit } from "@angular/core";
import { NotifierService } from "./notifier/notifier.service";

import '../sass/main.scss';
import { INotifierOptions } from "./notifier/notifier.model";

@Component({
    selector: 'yk-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    private test = 1;
    private options:INotifierOptions = {
        animate: 'fade',
        clickToClose: true,
        maxStack: 5,
        pauseOnHover: false,
        position: ['bottom', 'center'],
        theClass: 'good bad hello world',
        timeDelay: 3000
    };

    constructor( private notifierService: NotifierService ) {
    }

    ngOnInit(): void {
    }

    add() {
        this.notifierService.success('Hello World ' + this.test, 'Angular Message:');
        this.test += 1;
    }
}
