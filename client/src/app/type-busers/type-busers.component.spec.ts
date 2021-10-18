import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBusersComponent } from './type-busers.component';

describe('TypeBusersComponent', () => {
  let component: TypeBusersComponent;
  let fixture: ComponentFixture<TypeBusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
