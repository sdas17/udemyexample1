import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeslistComponent } from './recipeslist.component';

describe('RecipeslistComponent', () => {
  let component: RecipeslistComponent;
  let fixture: ComponentFixture<RecipeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
