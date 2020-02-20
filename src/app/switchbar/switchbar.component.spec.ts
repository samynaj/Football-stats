import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchbarComponent } from './switchbar.component';

describe('SwitchbarComponent', () => {
  let component: SwitchbarComponent;
  let fixture: ComponentFixture<SwitchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
