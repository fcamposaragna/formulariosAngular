import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = "";

  id: number = 0;

  persona: Persona = {
    nombre: 'Franco',
    favoritos: [
      {
        id: this.id++,
        nombre: 'Metal Gear'
      },
      {
        id: this.id,
        nombre: 'Age of Empires'
      }
    ]
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre : this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = "";
  }

  guardar(){

  }

  eliminar(index:number){
    this.persona.favoritos.splice(index, 1)
  }

}
