import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material'
@NgModule({
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule],
  exports: [MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule],
})
export class ShareMatModule {}
