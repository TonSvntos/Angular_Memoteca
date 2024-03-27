import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Pensamento } from '../IPensamento';
import { PensamentoService } from '../pensamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  constructor(private service: PensamentoService,
    private router: Router, private formBuilder: FormBuilder)
    {  }

    ngOnInit(): void{
      this.formulario = this.formBuilder.group({
        conteudo: [[''],
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ])
      ],
        autoria: [[''], Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo:['modelo1'],
        favorito: [false]

      })
    }

  pensamento: Pensamento = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo3',
    favorito:false
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao'
    }
    return 'botao__desabilitado'
  }

  formulario!: FormGroup;

  criarPensamento(){

    console.log(this.formulario.status)

    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => this.router.navigate(['/listarPensamento']));

    }
  }
}
