import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-colaborador-add',
  templateUrl: './colaborador-add.component.html',
  styleUrls: ['./colaborador-add.component.css'],
})
export class ColaboradorAddComponent implements OnInit {
  colaboradorForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

}
