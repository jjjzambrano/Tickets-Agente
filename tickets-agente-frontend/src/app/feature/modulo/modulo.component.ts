import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modulo } from './modulo';
import { ModuloService } from './modulo.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
})

export class ModuloComponent implements OnInit {

  constructor(
    private moduloService: ModuloService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Modulo =
  {
    moduloId: 0,
    name: "",
    url: "",
    created: new Date(),
    updated: new Date(),
    enabled: true
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.moduloService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          moduloId: 0,
          name: "",
          url: "",
          created: new Date(),
          updated: new Date(),
          enabled: true
        };
      }
    )
  }

  findById(id: number):void {
    this.moduloService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.moduloService.deleteById(this.currentEntity.moduloId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
