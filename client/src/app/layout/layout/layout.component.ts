import { Component } from '@angular/core';
import { ProductComponent } from "../../products/product.component";
import { LandingPageComponent } from "../../landing-page/landing-page.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [ProductComponent, LandingPageComponent]
})
export class LayoutComponent {

}
