import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesitemComponent } from './recipesitem.component';

describe('RecipesitemComponent', () => {
  let component: RecipesitemComponent;
  let fixture: ComponentFixture<RecipesitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
