import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  cep: string = '';
  resultado: any = null;

  constructor(private cepService: CepService) {}

  buscarCep() {
    if (this.cep && this.cep.length === 8) {
      this.cepService.buscarCep(this.cep).subscribe(
        (dados) => {
          this.resultado = dados;
        },
        (erro) => {
          console.error('Erro ao buscar CEP:', erro);
        }
      )
    }
  }
}
