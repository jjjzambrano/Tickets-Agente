import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sugerencia } from './sugerencia';
import { SugerenciaService } from './sugerencia.service';
@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html'
})
export class SugerenciaComponent implements OnInit {

  constructor(
    private sugerenciaService: SugerenciaService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Sugerencia =
  {
    sugerenciaId: 0,
    motivo: "",
    sugerenci: "",
    created: new Date(),
    enable: true,
    archive: true,
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
    this.sugerenciaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          sugerenciaId: 0,
    motivo: "",
    sugerenci: "",
    created: new Date(),
    enable: true,
    archive: true,
        };
      }
    )
  }

  findById(id: number):void {
    this.sugerenciaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.sugerenciaService.deleteById(this.currentEntity.sugerenciaId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}

