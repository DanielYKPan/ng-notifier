/**
 * app.module
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { NotifierModule } from 'ng2-yk-notifier';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NotifierModule.forRoot({
            timeDelay: 2000,
            position : ['bottom', 'center']
        })
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

