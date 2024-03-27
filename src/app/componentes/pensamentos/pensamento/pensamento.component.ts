import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../IPensamento';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent {

  constructor (private service: PensamentoService){

  }

  @Input() listaFavoritos: Pensamento[]= []

  @Input() pensamento: Pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false,
  };

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento).subscribe(() =>{

      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento, 1))//splice remove itens da lista
    });
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito === false) {
      return 'inativo';
    }
    return 'ativo';
  }
}
