import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

declare var paypal: any;

@Component({
  selector: 'app-terapeutas-cliente',
  templateUrl: './terapeutas-cliente.component.html',
  styleUrls: ['./terapeutas-cliente.component.scss']
})
export class TerapeutasClienteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  terapeutas: Array<any> = []
  ver:boolean = false
  especialidades:any = []
  horas: any = []
  genero: any = ''
  sesion: any = ''
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
    // this.apiService.filtrosPreferencia().subscribe({
    //   next: (res)=> {
    //     console.log(this.terapeutas)
    //     this.terapeutas = res.preferencias
    //     if (res.response === "Success") {
    //         this.terapeutas = res.preferencias
    //         console.log(this.terapeutas)
    //     }
    //   }, error:(err)=> {console.log(err)}
    // })
    const form = new FormData()
    this.apiService.filtrarTerapeuta(form).subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === "Success") {
          this.terapeutas = res.preferencias
          console.log(this.terapeutas)
        }      }, error: (err)=> {
        // console.log(err)
      }
    })
  }

  filtrar(){
    const form = new FormData()
    this.especialidades.length > 0 && form.append('terapia', JSON.stringify(this.especialidades))
    this.horas.length > 0 && form.append('horario', JSON.stringify(this.horas))
    this.genero && form.append('genero', this.genero)
    this.sesion && form.append('sesion', this.sesion)
    this.apiService.filtrarTerapeuta(form).subscribe({
      next: (res)=> {
        console.log(res)
        if (res.response === "Success") {
          this.terapeutas = res.preferencias
          console.log(this.terapeutas)
        }      }, error: (err)=> {
        // console.log(err)
      }
    })
  }

  addEspecialidad($event: any){
    if ($event.target.checked){
      this.especialidades.push($event.target.value)
      this.filtrar()
    }else{
      this.especialidades = this.especialidades.filter((el:any) => el != $event.target.value)
      this.filtrar()
    }
    console.log(this.especialidades)
  }

  addHora($event: any){
    if ($event.target.checked){
      this.horas.push($event.target.value)
      this.filtrar()
    }else{
      this.horas = this.horas.filter((el:any) => el != $event.target.value)
      this.filtrar()
    }
    console.log(this.horas)
  }

  addGenero($event: any){
    this.genero = $event.target.value
    console.log(this.genero)
    this.filtrar()
  }

  addSesion($event: any){
    this.sesion = $event.target.value
    console.log(this.sesion)
    this.filtrar()
  }

  clearSesion(){
    (document.getElementById('sesion1') as HTMLInputElement).checked = false;
    (document.getElementById('sesion2') as HTMLInputElement).checked = false;
    (document.getElementById('sesion3') as HTMLInputElement).checked = false;
    this.sesion = ''
  }

  clearGenero(){
    (document.getElementById('genero1') as HTMLInputElement).checked = false;
    (document.getElementById('genero2') as HTMLInputElement).checked = false;
    (document.getElementById('genero3') as HTMLInputElement).checked = false;
    this.sesion = ''
  }

  nextTerapeuta(id: any){
    this.messageEvent.emit({
      inicio: false,
      terapeutas: false,
      documentos: false,
      tareas: false,
      sesiones: false,
      ver: true,
      id: id
    });
  }

}
