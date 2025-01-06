import { Component } from '@angular/core';
import {
  ForceOptionComponentEnum,
  PoDynamicFormField,
  PoDynamicModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-newproduct',
  standalone: true,
  imports: [PoDynamicModule],
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
      property: 'genre',
      label: 'Genero',
      required: true,
      options: [
        //É um array porque recebe varios campos
        //Evita com que a pessoa escreve e gere opções pra ela
        { label: 'Masculino', value: 'male' },
        { label: 'Feminino', value: 'female' },
        { label: 'Outros', value: 'other' },
      ],
      fieldLabel: 'label',
      fieldValue: 'value',
      forceOptionsComponentType: ForceOptionComponentEnum.select,
    },
    {
      property: 'country',
      label: 'País',
      required: true,
      placeholder: 'Informe o país',
    },
    {
      property: 'status',
      label: 'Status',
      required: true,
      options: [
        { label: 'Ativo', value: 'active' },
        { label: 'Inativo', value: 'inactive' },
      ],
    },
  ];
}

//se quiser usar mascara para telefone, cpf etc: mask: '000.000.000-00'
