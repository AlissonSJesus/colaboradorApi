import { Component, OnInit } from '@angular/core';
import Colaborador from '../Colaborador';
import { ColaboradorService } from '../colaborador.service';

 
@Component({
  selector: 'app-colaborador-get',
  templateUrl: './colaborador-get.component.html',
  styleUrls: ['./colaborador-get.component.css']
})
export class ColaboradorGetComponent implements OnInit {
  colaboradores!: Colaborador[];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.colaboradorService.getColaborador().subscribe((data: any) => {this.colaboradores = data;});
  }
}
