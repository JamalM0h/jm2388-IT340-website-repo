import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profilespage } from './profilespage';

describe('Profilespage', () => {
  let component: Profilespage;
  let fixture: ComponentFixture<Profilespage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profilespage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profilespage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
