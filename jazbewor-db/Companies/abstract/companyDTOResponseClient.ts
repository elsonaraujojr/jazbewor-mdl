import CompanyDTOResponseClientSource from "./companyDTOResponseClientSource";

export default class CompanyDTOResponseClient {
  id?: number;
  cnpj?: number;
  uf?: string;

  nome?: string;
  email?: string;
  // qsa?: string;
  situacao?: string;
  bairro?: string;
  logradouro?: string;
  numero?: string;
  cep?: string;
  municipio?: string;
  porte?: string;
  abertura?: string;
  natureza_juridica?: string;
  fantasia?: string;
  ultima_atualizacao?: string;
  atividade_principal?: CompanyDTOResponseClientSource;

  constructor(entity: any = {}) {
    entity = entity || {};
    this.id = entity.id;
    this.cnpj = entity.cnpj;
    this.uf = entity.uf;

    this.nome = entity.nome;
    this.email = entity.email;
    // this.qsa = entity.qsa;
    this.situacao = entity.situaca;
    this.bairro = entity.bairro;
    this.logradouro = entity.logradouro;
    this.numero = entity.numero;
    this.cep = entity.ceo;
    this.municipio = entity.municipio;
    this.porte = entity.porte;
    this.abertura = entity.abertura;
    this.natureza_juridica = entity.natureza_juridica;
    this.fantasia = entity.fantasia;
    this.ultima_atualizacao = entity.ultima_atualizacao;
    this.atividade_principal = new CompanyDTOResponseClientSource(entity.atividade_principal);
  }
}