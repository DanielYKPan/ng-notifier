/**
 * app.module
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { NotifierComponent } from "./notifier/notifier.component";
import { StoreModule } from "@ngrx/store";
import { messagesReducer } from "./notifier/messages.reducer";
import { NotifierMessageComponent } from "./notifier/notifier-message.component";
import { NotifierService } from "./notifier/notifier.service";
import { MaxPipe } from "./notifier/max.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.provideStore({messages: messagesReducer}),
    ],
    declarations: [
        AppComponent,
        NotifierComponent,
        NotifierMessageComponent,
        MaxPipe
    ],
    bootstrap: [AppComponent],
    providers: [NotifierService]
})
export class AppModule {
}

