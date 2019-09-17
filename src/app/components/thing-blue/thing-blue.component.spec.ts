import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingBlueComponent } from './thing-blue.component';

describe('ThingBlueComponent', () => {
  let component: ThingBlueComponent;
  let fixture: ComponentFixture<ThingBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
