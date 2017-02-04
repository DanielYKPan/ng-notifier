/**
 * notifier.module
 */

import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { messagesReducer } from "./messages.reducer";
import { NotifierComponent } from "./notifier.component";
import { NotifierMessageComponent } from "./notifier-message.component";
import { MaxPipe } from "./max.pipe";
import { NotifierService } from "./notifier.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.provideStore({messages: messagesReducer}),
    ],
    declarations: [
        NotifierComponent,
        NotifierMessageComponent,
        MaxPipe
    ],
    exports: [
        NotifierComponent
    ],
    providers: [
        NotifierService
    ]
})
export class NotifierModule {
}
