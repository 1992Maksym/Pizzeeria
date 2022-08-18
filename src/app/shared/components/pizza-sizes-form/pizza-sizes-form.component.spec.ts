import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSizesFormComponent } from './pizza-sizes-form.component';

describe('PizzaSizesFormComponent', () => {
  let component: PizzaSizesFormComponent;
  let fixture: ComponentFixture<PizzaSizesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaSizesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaSizesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
