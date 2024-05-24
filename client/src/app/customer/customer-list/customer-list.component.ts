import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../../shared/interfaces/customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent{
  @Input() customers!:Customer[]
  
}
