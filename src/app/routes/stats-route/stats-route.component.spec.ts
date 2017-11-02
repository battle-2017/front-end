import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsRouteComponent } from './stats-route.component';

describe('StatsRouteComponent', () => {
  let component: StatsRouteComponent;
  let fixture: ComponentFixture<StatsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
