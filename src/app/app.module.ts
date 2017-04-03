/**
 * app.module
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { NotifierModule } from '../../npmdist';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NotifierModule.forRoot({
            notifierLife: 2000,
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

