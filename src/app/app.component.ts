import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as coffeData from '../coffe-data/coffe.json';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple-coffe-page';
  
  constructor(){}
  products: any[] = [];

  getCoffe(): Observable<Array<String>> {
    this.products = (coffeData as any).coffe;
    return (coffeData as any).coffe;
  }

  available_color: string = '';
  all_products_color: string = '#6F757C';

  available_coffe(){
    this.available_color = '#6F757C';
    this.all_products_color = '';

    this.products = this.products.filter(el => el.available);
  }

  all_products(){
    this.available_color = '';
    this.all_products_color = '#6F757C';
    this.getCoffe();
  }

  ngOnInit(){
    this.getCoffe();
  }
}