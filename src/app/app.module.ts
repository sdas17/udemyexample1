import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopinglistComponent } from './shopinglist/shopinglist.component';
import { ShopingeditComponent } from './shopinglist/shopingedit/shopingedit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeslistComponent } from './recipes/recipeslist/recipeslist.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesitemComponent } from './recipes/recipeslist/recipesitem/recipesitem.component';
import { Demo1Component } from './demo1/demo1.component';
import { CokepitComponent } from './cokepit/cokepit.component';
import { ServerelmentComponent } from './serverelment/serverelment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopinglistComponent,
    ShopingeditComponent,
    RecipesComponent,
    RecipeslistComponent,
    RecipesDetailsComponent,
    RecipesitemComponent,
    Demo1Component,
    CokepitComponent,
    ServerelmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
