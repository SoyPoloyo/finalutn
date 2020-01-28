import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeFormComponent } from './personaje-form.component';

describe('PersonajeFormComponent', () => {
  let component: PersonajeFormComponent;
  let fixture: ComponentFixture<PersonajeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
