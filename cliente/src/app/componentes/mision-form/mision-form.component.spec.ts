import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionFormComponent } from './mision-form.component';

describe('MisionFormComponent', () => {
  let component: MisionFormComponent;
  let fixture: ComponentFixture<MisionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
