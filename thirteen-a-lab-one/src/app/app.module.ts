import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import {AddtowishlistComponent } from './components/addtowishlist/addtowishlist.component';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';

import { CardListComponent } from './components/card-list/card-list.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

import{MatAutocompleteModule} from '@angular/material/autocomplete';
 import{MatButtonModule} from '@angular/material/button';
 import{ MatButtonToggleModule} from '@angular/material/button-toggle';
 import{MatCheckboxModule} from '@angular/material/checkbox';
 import{ MatChipsModule} from '@angular/material/chips';
 import{ MatDatepickerModule} from '@angular/material/datepicker';
 import{MatDialogModule} from '@angular/material/dialog';
 import{ MatExpansionModule} from '@angular/material/expansion';
 import{ MatInputModule} from '@angular/material/input';
 import{MatListModule} from '@angular/material/list';
 import{MatMenuModule} from '@angular/material/menu';
 import{MatProgressBarModule} from '@angular/material/progress-bar';
 import{MatRadioModule} from '@angular/material/radio';

 import{MatSelectModule} from '@angular/material/select';
 import{MatSliderModule} from '@angular/material/slider';
 import{ MatSlideToggleModule} from '@angular/material/slide-toggle';
 import{ MatSnackBarModule} from '@angular/material/snack-bar';
 import{MatStepperModule} from '@angular/material/stepper';
 import{ MatTabsModule} from '@angular/material/tabs';
 import{MatTableModule} from '@angular/material/table';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    CardListComponent,
    AddtocartComponent,
    AddtowishlistComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatGridListModule,
    ScrollingModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,

    MatInputModule,
    MatListModule,
    MatMenuModule,

    MatProgressBarModule,

    MatRadioModule,

    MatSelectModule,

    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    ScrollingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
