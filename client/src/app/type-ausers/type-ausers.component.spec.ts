import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAusersComponent } from './type-ausers.component';

describe('TypeAusersComponent', () => {
  let component: TypeAusersComponent;
  let fixture: ComponentFixture<TypeAusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
