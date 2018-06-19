import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'
import { IpAddressService } from './ip-address.service'

describe('IpAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpAddressService],
      imports: [HttpClientTestingModule],
    })
  })

  it('should be created', inject([IpAddressService], (service: IpAddressService) => {
    expect(service).toBeTruthy()
  }))
})
