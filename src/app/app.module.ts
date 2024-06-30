import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Calcul1Component } from './calcul1/calcul1.component';
import { Calcul2Component } from './calcul2/calcul2.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule  } from '@angular/material/radio';
import { ToastrModule } from 'ngx-toastr';
import { CalculinsatComponent } from './calculinsat/calculinsat.component';




@NgModule({
  declarations: [
    AppComponent,
    Calcul1Component,
    Calcul2Component,
    CalculinsatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ToastrModule.forRoot(),
  ],
  providers: [      provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
