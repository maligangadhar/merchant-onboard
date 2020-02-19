import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMapComponent } from './application-map.component';

describe('ApplicationMapChartComponent', () => {
  let component: ApplicationMapComponent;
  let fixture: ComponentFixture<ApplicationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ApplicationMapComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
