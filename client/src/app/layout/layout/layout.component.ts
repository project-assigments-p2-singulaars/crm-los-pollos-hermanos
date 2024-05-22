import { Component } from '@angular/core';
import { ProductComponent } from "../../products/product.component";
import { SearchComponent } from "../../shared/components/search/search.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [ProductComponent]
})
export class LayoutComponent {

}
