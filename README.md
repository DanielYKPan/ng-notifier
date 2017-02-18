Angular: Notifier (ng2-yk-notifier)
===================

## Usage

1. Install ng2-yk-notifier using npm:

    ``` npm install ng2-yk-notifier --save ```

2. Add NotifierModule into your AppModule class. `app.module.ts` would look like this:

    ```typescript
    
        import {NgModule} from '@angular/core';
        import {BrowserModule} from '@angular/platform-browser';
        import {AppComponent} from './app.component';
        import {NotifierModule} from 'ng2-yk-notifier';
        
        @NgModule({
          imports: [BrowserModule, NotifierModule.forRoot()],
          declarations: [AppComponent],
          bootstrap: [AppComponent],
        })
        export class AppModule {
        
        }
    ```

4. Inject 'NotifierService' class in your component class.

    ```typescript
        import { Component, OnInit, ViewContainerRef } from "@angular/core";
        import { NotifierService } from 'ng2-yk-notifier';
        
        @Component({
          selector: 'awesome-component',
          template: '<button class="btn btn-default" (click)="showSuccess()">Notifier Tester</button>'
        })
        export class AppComponent implements OnInit {
        
          constructor( private notifier: NotifierService, 
                       private vRef: ViewContainerRef ) {
            
          }
       
           ngOnInit(): void {
               this.notifier.setRootViewContainerRef(this.vRef);
           }
            
          showSuccess() {
            this.notifier.success('You are awesome!', 'Success!');
          }
        
          showError() {
            this.notifier.error('This is not good!', 'Oops!');
          }
        
          showAlert() {
            this.notifier.alert('You are being warned.', 'Alert!');
          }
        
          showInfo() {
            this.notifier.info('Just some information for you.');
          }
        }
    ```

### NotifierOptions Configurations

By default, the notifier will show up at bottom right corner of the page view, and will automatically dismiss in 3 seconds. 
You can configure the notifiers using NotifierOptions class. Currently we support following options:

##### notifierLife: (number)
Determines how long an auto-dismissed notifier will be shown. Defaults to 3000 miliseconds. If you set it to 0, the notifier will not auto-dismiss.

##### maxStack: (number)
Determines maximum number of notifiers can be shown on the page in the same time. Defaults to 5.

##### position: (Array)
Determines where on the page the notifier should be shown. Here are list of values: 
* ['bottom', 'right'] (Default)
* ['bottom', 'center']
* ['bottom', 'left']
* ['top', 'right']
* ['top', 'center']
* ['top', 'left']

##### messageClass: (string)
CSS class for content within notifier.

##### titleClass: (string)
CSS class for title within notifier.

##### animate: (string)
You have following choice: 'fade', 'flyLeft' or 'flyRight'.(Defaults to 'fade')
* fade: makes every notifier either fade in or fade out.
* rotate: makes every notifier either rotate in or rotate out.
* scale: makes every notifier either scale in or scale out.
* flyLeft: makes every notifier fly in from left side. 
* flyRight: makes every notifier fly in from right side.

Use dependency inject for custom configurations. You can either inject into `app.module.ts` or any component class:
   
   ```typescript
       import {NgModule} from '@angular/core';
       import {BrowserModule} from '@angular/platform-browser';
       import {AppComponent} from './app.component';
       import {NotifierModule, NotifierOptions } from 'ng2-yk-notifier';
       
       let options: NotifierOptions = new NotifierOptions({
         animate: 'flyRight',
         position: ['top', 'right'],
         notifierLife: 4000
       });
           
       @NgModule({
         imports: [
             BrowserModule, 
             NotifierModule.forRoot(options),
           ],
         declarations: [AppComponent],
         bootstrap: [AppComponent],
       })
       export class AppModule {
       } 
   ```   
    
### <a name='override'></a>Override global option:
 
 You can also override `notifierLife`, `titleClass`, `messageClass`, `animate`, options for individual notifier:
    
    this.notifier.sucess('This notifier will dismiss in 10 seconds.', null, {notifierLife: 10000});
    this.notifier.info('This notifier will have "new-title" class in its title', null, {titleClass: 'new-title'});