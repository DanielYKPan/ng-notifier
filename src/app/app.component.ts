/**
 * app.component
 */

import { Component, OnInit, ViewContainerRef } from "@angular/core";

import '../sass/main.scss';
import { NotifierService } from 'ng2-yk-notifier';

@Component({
    selector: 'yk-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor( private vRef: ViewContainerRef,
                 private service: NotifierService ) {
    }

    ngOnInit(): void {
        this.service.setRootViewContainerRef(this.vRef);
    }

    add() {
        this.service.success('hello world', 'Angular Message');
    }

    addOverride() {
        this.service.info('hello world override', 'Angular Message', {animate: 'fade', timeDelay: 0, titleClass: 'titleOverride', messageClass: 'messageOverride'});
    }
}
