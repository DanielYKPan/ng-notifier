/**
 * app.component
 */

import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { NotifierService } from "./notifier/notifier.service";

import '../sass/main.scss';

@Component({
    selector: 'yk-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    private test = 1;

    constructor( private notifierService: NotifierService,
                 private vRef: ViewContainerRef ) {
    }

    ngOnInit(): void {
        this.notifierService.setRootViewContainerRef(this.vRef);
    }

    add() {
        this.notifierService.success('Hello World ' + this.test, 'Angular Message:');
        this.test += 1;
    }

    addOverride() {
        this.notifierService.info('Hello World Override', 'Angular Message:', {animate: 'fade'});
    }
}
