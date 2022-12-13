import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriComponent } from './criteri.component';

describe('CriteriComponent', () => {
  let component: CriteriComponent;
  let fixture: ComponentFixture<CriteriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
