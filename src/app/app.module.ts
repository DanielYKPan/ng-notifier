/**
 * app.module
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { NotificationComponent } from "./notification/notification.component";
import { StoreModule } from "@ngrx/store";
import { messagesReducer } from "./notification/messages.reducer";
import { NotificationMessageComponent } from "./notification/notification-message.component";
import { NotificationService } from "./notification/notification.service";
import { MaxPipe } from "./notification/max.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.provideStore({messages: messagesReducer}),
    ],
    declarations: [
        AppComponent,
        NotificationComponent,
        NotificationMessageComponent,
        MaxPipe
    ],
    bootstrap: [AppComponent],
    providers: [NotificationService]
})
export class AppModule {
}

