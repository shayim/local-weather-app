import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'dateSequence',
})
export class DateSequencePipe implements PipeTransform {
  transform(value: string): string {
    const dateStr = value.slice(value.lastIndexOf(' ') + 1)
    const date = parseInt(dateStr, 10)
    const seq =
      (date > 3 && date < 21) || (date > 23 && date < 31)
        ? 'th'
        : ['st', 'nd', 'rd'][date % 10]
    return `${value}${seq}`
  }
}
