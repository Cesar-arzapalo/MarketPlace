import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxLengthStringPipe } from './max-length-string.pipe';
import { CapitalizatePipe } from './capitalizate.pipe';


@NgModule({
  declarations: [MaxLengthStringPipe, CapitalizatePipe],
  imports: [
    CommonModule
  ],
  exports:[MaxLengthStringPipe,CapitalizatePipe]
})
export class PipesModule { }
