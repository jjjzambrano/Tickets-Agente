import { Component, OnInit } from '@angular/core';
import { Motivo } from '../motivo';
import { MotivoService } from '../motivo.service';

@Component({
  selector: 'app-motivo-list',
  templateUrl: './motivo-list.component.html',

})
export class MotivoListComponent implements OnInit {

  constructor(

    private motivoService: MotivoService
  ) { }


  motivoList: Motivo[] = [];

  ngOnInit(): void {
    this.findAll();
  }


  public findAll():void {
    this.motivoService.findAll().subscribe(
      (response) => this.motivoList = response
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.motivoService.findByName(term).subscribe(
        (response) => this.motivoList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }//dsdsd
}
