import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Order } from '../../shared/interfaces/order';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [RouterLink, MatTableModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent implements OnInit {
  @Input() orders!: Order[];

  ngOnInit(): void {}
}
