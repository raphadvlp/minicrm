import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  ForceOptionComponentEnum,
  PoButtonModule,
  PoDynamicFormField,
  PoDynamicModule,
  PoNotificationService,
  PoPageModule,
} from '@po-ui/ng-components';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-newproduct',
  standalone: true,
  imports: [PoDynamicModule, PoButtonModule, PoPageModule],
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.css',
})
export class NewproductComponent {
  public fields: PoDynamicFormField[] = [
    {
      property: 'name',
      label: 'Nome',
      required: true,
      gridColumns: 6,
      gridSmColumns: 12, //Se for em dispositivo móvel
      placeholder: 'Informe o nome',
      divider: 'Nome',
    },
    {
      property: 'message',
      label: 'Mensagem',
      required: true,
      gridColumns: 12,
      placeholder: 'Digite a Mensagem',
      divider: 'Mensagem',
    },
    // {
    //   property: 'genre',
    //   label: 'Genero',
    //   required: true,
    //   options: [
    //     //É um array porque recebe varios campos
    //     //Evita com que a pessoa escreve e gere opções pra ela
    //     { label: 'Masculino', value: 'male' },
    //     { label: 'Feminino', value: 'female' },
    //     { label: 'Outros', value: 'other' },
    //   ],
    //   fieldLabel: 'label',
    //   fieldValue: 'value',
    //   forceOptionsComponentType: ForceOptionComponentEnum.select,
    // },
    // {
    //   property: 'country',
    //   label: 'País',
    //   required: true,
    //   placeholder: 'Informe o país',
    // },
    // {
    //   property: 'status',
    //   label: 'Status',
    //   required: true,
    //   options: [
    //     { label: 'Ativo', value: 'active' },
    //     { label: 'Inativo', value: 'inactive' },
    //   ],
    // },
  ];

  private http = inject(HttpClient);
  private route = inject(Router);
  private url: string = environment.urlProducts;
  private notify = inject(PoNotificationService);

  public confirmForm(form: any) {
    this.http.post<any>(`&{this.url}/api/v1/helloworld`, form).subscribe({
      // this.http.post<any>(`&{this.url}/people`, form).subscribe({
      next: (value) =>
        this.notify.success({
          duration: 2000,
          message: `Novo cliente ${value.name} cadastrado com sucesso!`,
        }),
      error: (error) =>
        this.notify.error({ duration: 2000, message: error.message }),
      complete: () => this.route.navigate(['catalog']), //faz um redirecionamento()
    });
    this.route.navigate(['catalog']);
  }
}

//se quiser usar mascara para telefone, cpf etc: mask: '000.000.000-00'
