import { Injectable, computed, signal } from '@angular/core';
import {products} from "../../../../backend/db.json";

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  products = signal(products)
  text = signal('');

  filterArray = computed(() =>
    this.products().filter((product) =>
      product.name
        .trim()
        .toLocaleLowerCase()
        .includes(this.text().trim().toLocaleLowerCase())
    )
  );
}
