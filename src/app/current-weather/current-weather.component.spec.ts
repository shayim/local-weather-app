import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { WeatherService } from '../services/weather.service'
import { FakeWeatherService } from '../services/weather.service.fake'
import { CapitalPipe } from './../capital.pipe'
import { DateSequencePipe } from './../date-sequence.pipe'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent, DateSequencePipe, CapitalPipe],
      imports: [HttpClientTestingModule],
      providers: [{ provide: WeatherService, useClass: FakeWeatherService }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    console.log(component.current)
    expect(component.current).toBeTruthy()
  })
})
