import CompanyDTOResponseClientSource from "./companyDTOResponseClientSource";

export default class Company {
  id?: number;
  cnpj?: number;
  uf?: string;
  nome?: string;
  email?: string;
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
  atividade_principal?: CompanyDTOResponseClientSource;

  constructor(entity: any = {}) {
    entity = entity || {};
    this.id = entity.id;
    this.cnpj = entity.cnpj;
    this.uf = entity.uf;
    this.nome = entity.nome;
    this.email = entity.email;
    this.situacao = entity.situaca;
    this.bairro = entity.bairro;
    this.logradouro = entity.logradouro;
    this.numero = entity.numero;
    this.cep = entity.cep;
    this.municipio = entity.municipio;
    this.porte = entity.porte;
    this.abertura = entity.abertura;
    this.natureza_juridica = entity.natureza_juridica;
    this.fantasia = entity.fantasia;
    this.atividade_principal = new CompanyDTOResponseClientSource(entity.atividade_principal);
  }
}