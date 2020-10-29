import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingPart2Component } from './event-binding-part2.component';

describe('EventBindingPart2Component', () => {
  let component: EventBindingPart2Component;
  let fixture: ComponentFixture<EventBindingPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
