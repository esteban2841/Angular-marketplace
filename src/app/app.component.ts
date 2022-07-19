import { Component } from '@angular/core';
import { Product } from './products.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "Esteban"
  age = "26"
  img = "https://as01.epimg.net/meristation/imagenes/2022/07/19/noticias/1658215616_182604_1658215701_noticia_normal_recorte1.jpg"
  btnDisable = true
  toggleButon(){
    this.btnDisable = !this.btnDisable
  }

  gustavo = {
    lastName: "Lozano",
    age: 70,

  }
  increaseAge(){
    this.gustavo.age += 1
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const inputValue = event.target as HTMLInputElement
    this.gustavo.lastName = inputValue.value
  }
  names: string[] = ["David", "Camila", "Jovanny"]
  newName : string = "";

  submitInputValue(){
    this.names.push(this.newName);
    this.newName = "";
  }
  deletePerson(index: number){
    this.names.splice(index, 1)
  }

  products : Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  divHeight = ""
  divWidth = ""
  register={
    name:"",
    email:"",
    password:""
  }

  onRegister(){
    console.log(this.register)
  }
}
