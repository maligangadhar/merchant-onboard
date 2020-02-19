import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleWiseComponent } from './circle-wise.component';

describe('CircleWiseComponent', () => {
  let component: CircleWiseComponent;
  let fixture: ComponentFixture<CircleWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
