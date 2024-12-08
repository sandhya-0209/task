import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
       productNames : Array<string> = ["Dior","Chanel","Gucci","Prada","Hermes Paris"]
}
