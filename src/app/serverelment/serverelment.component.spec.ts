import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerelmentComponent } from './serverelment.component';

describe('ServerelmentComponent', () => {
  let component: ServerelmentComponent;
  let fixture: ComponentFixture<ServerelmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerelmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerelmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
