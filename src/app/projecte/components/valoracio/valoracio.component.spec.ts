import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracioComponent } from './valoracio.component';

describe('ValoracioComponent', () => {
  let component: ValoracioComponent;
  let fixture: ComponentFixture<ValoracioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoracioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
