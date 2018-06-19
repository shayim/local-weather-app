import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'capital',
})
export class CapitalPipe implements PipeTransform {
  transform(value: string): any {
    value = value || ''
    const arr = value.split(/\s+/)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr.join(' ')
  }
}
