import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTempComponent } from './crear-temp.component';

describe('CrearTempComponent', () => {
  let component: CrearTempComponent;
  let fixture: ComponentFixture<CrearTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
