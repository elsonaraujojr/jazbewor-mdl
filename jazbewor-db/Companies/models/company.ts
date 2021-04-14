export default class Company {
  id?: number;
  cnpj?: number;
  name?: string;
  constructor(entity: any = {}) {
    entity = entity || {};
    this.id = entity.id;
    this.cnpj = entity.cnpj;
    this.name = entity.name;
  }
}