import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cataloguepage } from './cataloguepage';

describe('Cataloguepage', () => {
  let component: Cataloguepage;
  let fixture: ComponentFixture<Cataloguepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cataloguepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cataloguepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
