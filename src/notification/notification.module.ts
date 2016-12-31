/**
 * notification.module
 */

import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { messagesReducer } from "./messages.reducer";
import { NotificationComponent } from "./notification.component";
import { NotificationMessageComponent } from "./notification-message.component";
import { NotificationService } from "./notification.service";
import { MaxPipe } from "./max.pipe";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.provideStore({messages: messagesReducer}),
    ],
    declarations: [
        NotificationComponent,
        NotificationMessageComponent,
        MaxPipe
    ],
    providers: [NotificationService]
})
export class NotificationModule {
}