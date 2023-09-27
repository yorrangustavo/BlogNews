import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTagComponent } from './components/menu-tag/menu-tag.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { BigCard2Component } from './components/big-card2/big-card2.component';
import { BigCard3Component } from './components/big-card3/big-card3.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';
import { EsportesComponent } from './components/pages/esportes/esportes.component';
import { TecnologiaComponent } from './components/pages/tecnologia/tecnologia.component';
import { SmallCardComponent } from './components/pages/small-card/small-card.component';
import { SmallCard2Component } from './components/pages/small-card2/small-card2.component';
import { SmallCard3Component } from './components/pages/small-card3/small-card3.component';
import { SmallCard4Component } from './components/pages/small-card4/small-card4.component';
import { FlooterComponent } from './components/pages/flooter/flooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTagComponent,
    BigCardComponent,
    BigCard2Component,
    BigCard3Component,
    HomeComponent,
    NoticiasComponent,
    EsportesComponent,
    TecnologiaComponent,
    SmallCardComponent,
    SmallCard2Component,
    SmallCard3Component,
    SmallCard4Component,
    FlooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
