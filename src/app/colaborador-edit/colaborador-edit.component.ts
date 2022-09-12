import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';
import Swal from 'sweetalert2'
import Colaborador from '../Colaborador';

@Component({
  selector: 'app-colaborador-edit',
  templateUrl: './colaborador-edit.component.html',
  styleUrls: ['./colaborador-edit.component.css']
})
export class ColaboradorEditComponent implements OnInit {
  colaborador: any = {};
  colaboradorForm!: FormGroup;
  colaboradores!: Colaborador[];
  colaboradorId: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private colaboradorService: ColaboradorService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.colaboradorService.editColaborador(params['id']).subscribe((res: any) => {
        this.colaborador = res;
        this.colaboradorForm.setValue({
          nome: this.colaborador.nome,
          cargo: this.colaborador.cargo,
          salary: this.colaborador.salary,
          data_nascimento: this.colaborador.data_nascimento,
          matricula: this.colaborador.matricula
        });
      });
    });
  }

  /**
   * Método responsável por criar 'Colaborador' ao entrar na página de edit
   */
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
   * Método responsável por atualizar 'Colaborador' através do evento de click no botão 'Atualizar'
   * @param nome 
   * @param cargo 
   * @param salary 
   * @param data_nascimento 
   * @param matricula 
   * @param id 
   */
  updateColaborador(nome: string, cargo: string, salary: any, data_nascimento: any, matricula: any, id?: any) {
    this.activatedRoute.params.subscribe(params => {
      this.colaboradorService.updatetColaborador(nome, cargo, salary, data_nascimento, matricula, params['id']);
    });
    // ==> Depois que o usuário clicar no botão "Atualizar" será redirecionado para a página que lista os colaboradores.
    this.router.navigate(["colaborador"]);
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Colaborador atualizado.',
      timer: 1500
    })
  }

}
