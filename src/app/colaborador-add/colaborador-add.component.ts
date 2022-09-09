import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ColaboradorService } from '../colaborador.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-colaborador-add',
  templateUrl: './colaborador-add.component.html',
  styleUrls: ['./colaborador-add.component.css'],
})
export class ColaboradorAddComponent implements OnInit {
  colaboradorForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private colaboradorService: ColaboradorService) {

    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.colaboradorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cargo: ['', Validators.required],
      salary: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      matricula: ['', Validators.required]
    });
  }

  /**
   * Método responsável por adcionar um novo colaborador
   * @param nome
   * @param cargo 
   * @param salary 
   * @param data_nascimento 
   * @param matricula 
   * @returns 
   */
  createColaborador(nome: string, cargo: string, salary: any, data_nascimento: any, matricula: any) {
    return this.colaboradorService.creatColaborador(
      nome,
      cargo,
      salary,
      data_nascimento,
      matricula
    )
  }

  mostrarSucesso() { 
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Colaborador registrado.'
    })
  }

}
