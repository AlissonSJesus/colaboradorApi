/**
 * arquivo: app/colaborador.service.ts
 * descrição: Arquivo responsável por realizar as transições de request entre o back <--> front
 * data: 08/09/2022
 * @author: Alisson S. de Jesus <@SChinado> - Twitter
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  url = 'http://localhost:3000/api'; // ==> Vindo do back-end
  colaboradorId: any;

  constructor(private http: HttpClient) {

  }

  /**
   * Método responsável por criar um 'New Colaborador'
   */

  creatColaborador(nome: string, cargo: string, salary: number, data_nascimento: Date, matricula: number) {
    const colaborador = {
      nome,
      cargo,
      salary,
      data_nascimento,
      matricula
    };
    console.log(colaborador);

    // ==> (POST - url no back-end): http://localhost:3000/api/colaboradores
    const confirm = this.http.post(`${this.url}/colaboradores`, colaborador).subscribe(res => console.log('Feito'));
    if (confirm) {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Colaborador registrado.'
      })
    }
  }

  /**
   * Médtodo responsável por listar 'Colaborador', através de um GET
   * @returns 
   */
  getColaborador() {
    // ==> (GET - url no back-end): http://localhost:3000/api/colaboradores
    return this.http.get(`${this.url}/colaboradores`);
  }

 /**
  * Método responsável por editar um determinado 'Colaborador'
  * @param id 
  */
  editColaborador(id: any) { 
    // ==> (PUT - url no back-end): http://localhost:3000/api/colaboradores
    return this.http.get(`${this.url}/colaboradores/${id}`);
  }

  /**
   * Método responsável pelo evento do botão Atualizar no edit.component.html
   * @param nome
   * @param cargo 
   * @param salary 
   * @param data_nascimento 
   * @param matricula 
   * @param id 
   */
  updatetColaborador(nome: string, cargo: string, salary: number, data_nascimento: Date, matricula: number, id: any) {
    const colaborador = {
      nome,
      cargo,
      salary,
      data_nascimento,
      matricula
    };
    // ==> (PUT - url no back-end): http://localhost:3000/api/colaboradores
    this.http.put(`${this.url}/colaboradores/${id}`, colaborador);
  }
}
