import { Component, inject } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private searchService = inject(SearchService)
  text =this.searchService.text;
  
  emailFormControl = new FormControl('', [Validators.required]);

 
}
