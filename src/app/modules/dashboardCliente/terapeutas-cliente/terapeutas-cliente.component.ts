import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapeutas-cliente',
  templateUrl: './terapeutas-cliente.component.html',
  styleUrls: ['./terapeutas-cliente.component.scss']
})
export class TerapeutasClienteComponent implements OnInit {

  terapeutas: Array<any> = []

  constructor ( private apiService: ApiService ){}

  ngOnInit(): void {
    this.filtroPreferencias()
  }

  drop(){
    document.getElementById('drop1')!.style.transform = 'rotate(180deg)'
  }

  filtroHora(target: any){
    const valor = target.value
    console.log(valor)
    const Valor = valor.split(',')
    const data = {data1: Valor[0], data2: Valor[1]}
    const keys = {key1: 'horai', key2: 'horaf'}
    this.apiService.filtrosGet('hora', data, keys).subscribe({
      next: (res)=> {
        console.log(res)

      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  filtroPrecio(target: any){
    const valor = target.value
    console.log(valor)
    const Valor = valor.split(',')
    const data = {data1: Valor[0], data2: Valor[1]}
    const keys = {key1: 'valorhi', key2: 'valorhf'}
    this.apiService.filtrosGet('precio', data, keys).subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === "Success") {
          this.terapeutas = res.data
          console.log(this.terapeutas)
        }
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  filtroEdad(target: any){
    const valor = target.value
    console.log(valor)
    const Valor = valor.split(',')
    const data = {data1: Valor[0], data2: Valor[1]}
    const keys = {key1: 'edadme', key2: 'edadma'}
    this.apiService.filtrosGet('edad', data, keys).subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === "Success") {
          this.terapeutas = res.data
          console.log(this.terapeutas)
        }
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  filtroGenero(target: any){
    const valor = target.value
    console.log(valor)
    this.apiService.filtrosGenero(valor).subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === "Success") {
          this.terapeutas = res.data
          console.log(this.terapeutas)
        }      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  filtroEspecialidad(target: any){
    const valor = target.value
    console.log(valor)
    const form = new FormData()
    form.append('especialidad', valor)
    this.apiService.filtrosEspecialidad(form).subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === "Success") {
          this.terapeutas = res.data
          console.log(this.terapeutas)
        }      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  filtroPreferencias(){
    this.apiService.filtrosPreferencia().subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === "Success") {
          this.terapeutas = res.data
          console.log(this.terapeutas)
        }      }, error: (err)=> {
        console.log(err)
      }
    })
  }
}
