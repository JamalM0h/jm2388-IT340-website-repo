import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrationpage } from './registrationpage';

describe('Registrationpage', () => {
  let component: Registrationpage;
  let fixture: ComponentFixture<Registrationpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrationpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrationpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
