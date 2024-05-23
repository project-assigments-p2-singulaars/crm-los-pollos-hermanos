import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  @Input() productForm!: FormGroup;
  @Output() sentForm = new EventEmitter<Product>();
  @Output() sentFormulario = new EventEmitter()

  constructor(private fb: FormBuilder, private productService:ProductService) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      categories: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  submit() {
    if (this.productForm.valid) {
      const product: Product = {
        name: this.productForm.controls["name"].value,
        categories: this.productForm.controls["categories"].value,
        price: this.productForm.controls["price"].value,
        stock: this.productForm.controls["stock"].value,
        description: this.productForm.controls["description"].value,
        imageUrl: this.productForm.controls["imageUrl"].value,
      };console.log(product)
      this.productService.addProduct(product)
       this.sentFormulario.emit("esto se envia aal padre");
    }
  }
}

