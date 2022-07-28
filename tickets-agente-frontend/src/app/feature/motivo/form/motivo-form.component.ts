import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Motivo } from '../motivo';
import { MotivoService } from '../motivo.service';

@Component({
  selector: 'app-motivo-form',
  templateUrl: './motivo-form.component.html'

})
export class MotivoFormComponent implements OnInit {

  constructor(
    private motivoService: MotivoService,
    private activatedRoute: ActivatedRoute

    ) { }

  currentEntity: Motivo =
  {
    motivoId: 0,
    descripcion: "",
    created: new Date(),
    enabled: true,
    archived: false,
    moduloId: 0

  }




    ngOnInit(): void {

      this.activatedRoute.paramMap.subscribe(
        (params) => {
          if (params.get("id")){
            this.findById(parseInt(params.get("id")!));
          }
        }
      )


  }//ngOnInit

  save():void {
    console.table(this.currentEntity);
    this.motivoService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          motivoId: 0,
          descripcion: "",
          created: new Date(),
          enabled: true,
          archived: false,
          moduloId: 0
        };
      }
    )
  }//save

  findById(id: number):void {
    this.motivoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }//finById


  deleteById():void{
    this.motivoService.deleteById(this.currentEntity.motivoId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }


}
