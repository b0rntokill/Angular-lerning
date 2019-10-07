import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
          "id": 1,
          "name": "iPhone 11 64GB",
          "price": 59900,
          "imageUrl": "//img.mvideo.ru/Pdb/30045357m.jpg",
          "description": "Смартфон Apple iPhone 11 64GB Black (MWLT2RU/A)"
      },
      {
          "id": 2,
          "name": "iPhone 11 128GB",
          "price": 64990,
          "imageUrl": "//img.mvideo.ru/Pdb/30045423m.jpg",
          "description": "Смартфон Apple iPhone 11 128GB Black (MWM02RU/A)"
      },
      {
          "id": 3,
          "name": "iPhone 11 256GB",
          "price": 73990,
          "imageUrl": "//img.mvideo.ru/Pdb/30045429m.jpg",
          "description": "Смартфон Apple iPhone 11 256GB Black (MWM72RU/A)"
      },
      {
          "id": 4,
          "name": "iPhone 11 Pro 64GB",
          "price": 89990,
          "imageUrl": "//img.mvideo.ru/Pdb/30045435m.jpg",
          "description": "Смартфон Apple iPhone 11 Pro 64GB Space Grey (MWC22RU/A)"
      },
      {
          "id": 5,
          "name": "iPhone 11 Pro 256GB",
          "price": 103990,
          "imageUrl": "//img.mvideo.ru/Pdb/30045439m.jpg",
          "description": "Смартфон Apple iPhone 11 Pro 256GB Space Grey (MWC72RU/A)"
      },
      {
          "id": 6,
          "name": "iPhone 11 Pro 512GB",
          "price": 121990,
          "imageUrl": "//img.mvideo.ru/Pdb/30045443m.jpg",
          "description": "Смартфон Apple iPhone 11 Pro 512GB Space Grey (MWCD2RU/A)"
      },
      {
          "id": 7,
          "name": "iPhone 11 Pro Max 64GB",
          "price": 99990,
          "imageUrl": "//img.mvideo.ru/Pdb/30045447m.jpg",
          "description": "Смартфон Apple iPhone 11 Pro Max 64GB Space Grey (MWHD2RU/A)"
      },
      {
          "id": 8,
          "name": "iPhone 11 Pro Max 256GB",
          "price": 113990,
          "imageUrl": "//img.mvideo.ru/Pdb/30045451m.jpg",
          "description": "Смартфон Apple iPhone 11 Pro Max 256GB Space Grey (MWHJ2RU/A)"
      },
      {
          "id": 9,
          "name": "iPhone 11 Pro Max 512GB",
          "price": 131990,
          "imageUrl": "//img.mvideo.ru/Pdb/30045455m.jpg",
          "description": "Смартфон Apple iPhone 11 Pro Max 512GB Space Grey (MWHN2RU/A)"
      },
      {
          "id": 10,
          "name": "iPhone XS 64GB",
          "price": 79990,
          "imageUrl": "//img.mvideo.ru/Pdb/30040014m.jpg",
          "description": "Смартфон Apple iPhone XS 64GB Space Grey (MT9E2RU/A)"
      },
      {
          "id": 11,
          "name": "Tefal Trattoria 4,5л",
          "price": 3490,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/50126024b.jpg",
          "description": "Кастрюля (антипригарное покрытие) Tefal Trattoria, с крышкой, 4,5л (E2184614)"
      },
      {
          "id": 12,
          "name": "Tefal Virtuoso 5,4л",
          "price": 3790,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/50127791b.jpg",
          "description": "Кастрюля Tefal Virtuoso 5,4л (E4924614)"
      },
      {
          "id": 13,
          "name": "Vitesse Granite 2,2л",
          "price": 1990,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/50126047b.jpg",
          "description": "Кастрюля (гранитное покрытие) Vitesse Granite VS-4018 с крышкой 2,2л"
      },
      {
          "id": 14,
          "name": "Endever Stone-Beige-24С",
          "price": 2190,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/50053527b.jpg",
          "description": "Кастрюля керамическая Endever Stone-Beige-24С"
      },
      {
          "id": 15,
          "name": "Sistema Home Bucket 10л",
          "price": 799,
          "imageUrl": "//img.mvideo.ru/Pdb/50053270m.jpg",
          "description": "Ведро Sistema Home Bucket 10л White (51110)"
      },
      {
          "id": 16,
          "name": "Кофеварка Philips",
          "price": 3290,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/20032115b.jpg",
          "description": "Кофеварка капельного типа Philips HD7434/20"
      },
      {
          "id": 17,
          "name": "Кофеварка VITEK VT-1514",
          "price": 11990,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/20027241b.jpg",
          "description": "Кофеварка рожкового типа VITEK VT-1514 BK"
      },
      {
          "id": 18,
          "name": "Кофеварка Bosch ComfortLine",
          "price": 4490,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/20041560b.jpg",
          "description": "Кофеварка капельного типа Bosch ComfortLine TKA6A041"
      },
      {
          "id": 19,
          "name": "Кофеварка Moulinex Subito",
          "price": 2790,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/20031306b.jpg",
          "description": "Кофеварка капельного типа Moulinex Subito FG360D10"
      },
      {
          "id": 20,
          "name": "Кофейник Lagostina",
          "price": 1890,
          "imageUrl": "//img.mvideo.ru/Pdb/small_pic/200/50119498b.jpg",
          "description": "Кофейник Lagostina 010321200006 (6 чашек BRAVA)"
      }
  ];
    return {products};
  }
}
