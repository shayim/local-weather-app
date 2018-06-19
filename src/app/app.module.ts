import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { ShareMatModule } from './share-mat/share-mat.module';
import { CapitalPipe } from './capital.pipe';
import { DateSequencePipe } from './date-sequence.pipe'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, CapitalPipe, DateSequencePipe],
  imports: [BrowserModule, BrowserAnimationsModule, FlexLayoutModule, HttpClientModule, ShareMatModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
