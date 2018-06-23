import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { CapitalPipe } from './capital.pipe'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { DateSequencePipe } from './date-sequence.pipe'
import { WeatherService } from './services/weather.service'
import { ShareMatModule } from './share-mat/share-mat.module'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        DateSequencePipe,
        CapitalPipe,
      ],
      providers: [WeatherService],
      imports: [HttpClientTestingModule, ShareMatModule],
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('span').textContent).toContain('LocalCast Weather')
  }))
})
