import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { debounceTime, filter } from 'rxjs/operators'
import { WeatherService } from './../services/weather.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  searchForm: FormGroup
  @Output() search = new EventEmitter()
  constructor(private fb: FormBuilder, private ws: WeatherService) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['', Validators.minLength(2)],
    })

    this.searchForm.controls['search'].valueChanges
      .pipe(
        debounceTime(500),
        filter(query => {
          console.log(query)
          return query.length > 2
        })
      )
      .subscribe(query => this.search.emit(query))
  }
}
