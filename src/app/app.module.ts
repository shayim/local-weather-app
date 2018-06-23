import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { CapitalPipe } from './capital.pipe'
import { CitySearchComponent } from './city-search/city-search.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { DateSequencePipe } from './date-sequence.pipe'
import { ShareMatModule } from './share-mat/share-mat.module'

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CapitalPipe,
    DateSequencePipe,
    CitySearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShareMatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
