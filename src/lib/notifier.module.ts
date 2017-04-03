/**
 * notifier.module
 */

import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { messagesReducer } from './messages.reducer';
import { NotifierMessageComponent } from './notifier-message.component';
import { MaxPipe } from './max.pipe';
import { NotifierService } from './notifier.service';
import { NotifierOptions } from './notifier-options.service';
import { NotifierContainerComponent } from './notifier-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.provideStore({messages: messagesReducer}),
        BrowserAnimationsModule,
    ],
    declarations: [
        NotifierContainerComponent,
        NotifierMessageComponent,
        MaxPipe
    ],
    exports: [
        NotifierContainerComponent
    ],
    entryComponents: [NotifierContainerComponent]
})
export class NotifierModule {
    public static forRoot(config?: NotifierOptions): ModuleWithProviders {
        return {
            ngModule: NotifierModule,
            providers: config ? [
                    {provide: NotifierOptions, useValue: config},
                    NotifierService,
                ] : [NotifierService],
        };
    }
}
