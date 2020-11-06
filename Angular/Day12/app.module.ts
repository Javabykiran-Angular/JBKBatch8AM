import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { CourseComponent } from './course/course.component';
import { PropetybindingComponent } from './propetybinding/propetybinding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventBindingPart2Component } from './event-binding-part2/event-binding-part2.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FormsModule } from '@angular/forms';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { MouseeventComponent } from './mouseevent/mouseevent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import {MyPipe} from './summary.pipe';
import { Course1Component } from './course1/course1.component';
import { MyService } from './myservice.service';
import { MyPostComponent } from './my-post/my-post.component';
import {HttpClientModule} from '@angular/common/http';
import { MyhttpService } from './myhttp.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    PropetybindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EventBindingPart2Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    MouseeventComponent,
    Child1Component,
    Child2Component,
    PipeComponent,
    CustompipeComponent,
    MyPipe,
    Course1Component,
    MyPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyService,MyhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
