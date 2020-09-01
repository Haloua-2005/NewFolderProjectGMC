import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredPersonListComponent } from './hired-person-list.component';

describe('HiredPersonListComponent', () => {
  let component: HiredPersonListComponent;
  let fixture: ComponentFixture<HiredPersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiredPersonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
