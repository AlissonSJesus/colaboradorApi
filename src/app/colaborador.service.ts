/**
 * arquivo: app/colaborador.service.ts
 * descrição: Arquivo responsável por realizar as transições de request entre o back <--> front
 * data: 08/09/2022
 * @author: Alisson S. de Jesus <@SChinado> - Twitter
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  url = 'http://localhost:3000/api'; // ==> Vindo do back-end

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
    this.http.post(`${this.url}/colaboradores`, colaborador).subscribe(res => console.log('Feito'));
  }
}
