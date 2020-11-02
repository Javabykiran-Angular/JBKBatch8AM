import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseeventComponent } from './mouseevent.component';

describe('MouseeventComponent', () => {
  let component: MouseeventComponent;
  let fixture: ComponentFixture<MouseeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
