import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CategoryFilter, Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('product.json');
  }

  getById(id: number): Observable<Product | undefined> {
    return this.getAll().pipe(map(list => list.find(p => p.id === id.toString())));
  }

  filter(products: Product[], search: string, category: CategoryFilter): Product[] {
    const q = search.trim().toLowerCase();

    return products.filter(
      p =>
        // გავასწორე !== და შევცვალე ===-ით არჩეული კატეგორია რომ გამოჩნდეს
        (category === 'all' || p.category === category) &&

        // title გადავიყვანე პატარა ასოებში რომ ძებნა რეგისტრზე დამოკიდებული არ იყოს
        p.title.toLowerCase().includes(q),
    );
  }
}