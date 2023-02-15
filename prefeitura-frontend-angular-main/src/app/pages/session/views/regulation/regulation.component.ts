import { Component } from '@angular/core';

@Component({
  selector: 'app-regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.scss']
})
export class RegulationComponent {
  links = [
    {
      link: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/L14017.htm",
      title: "Lei Federal",
    },
    {
      link: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/decreto/D10464.htm",
      title: "Decreto federal",
    },
    {
      link: "https://dome.recife.pe.gov.br/upload_dome/CAPA_MIOLO_E_CAMARA_15_10_2020_EDICAO_115-assinado.pdf",
      title: "Decreto Municipal (Páginas 4 e 5)",
    },
    {
      link: "http://www2.recife.pe.gov.br/sites/default/files/chamada_publica_n_001.2020_lab_20.10.pdf",
      title: "Chamada Pública Nº 001/2020",
    },
    {
      link: "http://www2.recife.pe.gov.br/sites/default/files/edital_de_premiacao_lei_aldir_blanc.pdf",
      title: "Edital de Premiação",
    },
    {
      link: "http://www2.recife.pe.gov.br/sites/default/files/manual_de_prestacao_de_contas_aldir_blanc.pdf",
      title: "Manual de Prestação de Contas",
    },
  ];

}
