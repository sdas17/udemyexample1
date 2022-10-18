import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokepitComponent } from './cokepit.component';

describe('CokepitComponent', () => {
  let component: CokepitComponent;
  let fixture: ComponentFixture<CokepitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CokepitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CokepitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
