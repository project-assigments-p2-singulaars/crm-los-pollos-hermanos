import { Component, Input, OnInit, Signal, input } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { RouterLink } from '@angular/router';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { MatCardHeader, MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatCardHeader, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
@Input() products!:Product[]

ngOnInit(): void {
  
}
}
