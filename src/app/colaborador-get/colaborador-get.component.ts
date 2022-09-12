import { Component, OnInit } from '@angular/core';
import Colaborador from '../Colaborador';
import { ColaboradorService } from '../colaborador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-colaborador-get',
  templateUrl: './colaborador-get.component.html',
  styleUrls: ['./colaborador-get.component.css']
})
export class ColaboradorGetComponent implements OnInit {
  colaboradores!: Colaborador[];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.colaboradorService.getColaborador().subscribe((data: any) => {
      this.colaboradores = data;
      console.log('Colaboradores:', this.colaboradores);
    });
  }

  /**
   * Método responsável por excluir 'Colaboradore'
   * @param id 
   */
  deleteColaborador(id: any) {
    Swal.fire({
      icon: 'warning',
      title: 'Alerta!',
      text: 'Você tem certeza que deseja excluir o colaborador?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value == true) {
        this.colaboradorService.deleteColaborador(id).subscribe();
        const index = this.colaboradores.indexOf(id);
        this.colaboradores.splice(index, 1);
        Swal.fire(
          'Deleted it!',
          'Colaborador foi deletado'
        );
        location.reload()
      } else if (result.dismiss == Swal.DismissReason.cancel) { 
        Swal.fire(
        'Cancel!',
        'Retornando para a lista de colaboradores.'
        );
      }
    });
  }
}
