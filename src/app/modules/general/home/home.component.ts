import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

}

// //imports
// import { Component, OnInit } from '@angular/core';
// //déclaration du composant
// @Component({
//   selector: 'app-comp',
//   templateUrl: './comp.component.html',
//   styleUrls: ['./comp.component.scss']
// })
// export class CompComponent implements OnInit {
//   //variables (mettre ici les variables "binded" à utiliser pour le template)
//   maVar ="";
//   //constructeur
//   constructor() {}
//   //appelé à l'initialisation du composant
//   ngOnInit(): void {
//   }
//   //méthodes
//   myFunction1(): void {
//   }
// }

// // variable qui contient un tableau : créer un fichier
// //à intégrer dans un fichier custom.ts
// export class Custom {
//   id: number;
//   label: string;
// }

// import { Custom } from './custom';
// //...
// export class MyComponent implements OnInit {
//  customs: Custom[];
// //...




// //importation du forms module
// import { FormsModule } from '@angular/forms';
// //ajout dans le NgModule
// @NgModule({
//   declarations: [
//     //...
//   ],
//   imports: [
//     FormsModule,
//     //...
//   ],
//   //...
// })



// Si on souhaite utiliser une API, nous allons devoir utiliser le composant HttpClient de Angular :
// //import du module
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// //définition du http options
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
// };
// //passage du client HTTP
// constructor(private http: HttpClient) { }
// //appel en get
// this.http.get('https://jsonplaceholder.typicode.com/todos', httpOptions);