import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { SelectorComponent } from './selector/selector.component';
import { CalendarComponent } from './calendar/calendar.component';
import {MomentPipe} from './shared/moment.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrganizerComponent,
    SelectorComponent,
    CalendarComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
