import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxLengthStringPipe } from './max-length-string.pipe';


@NgModule({
  declarations: [MaxLengthStringPipe],
  imports: [
    CommonModule
  ],
  exports:[MaxLengthStringPipe]
})
export class PipesModule { }
