import { toDate } from "../../../utils";
import Company from "../../Companies/models/company";
import { StatusCallEnum } from "./status-call-enum";

export default class Call {
  id?: number;
  company?: Company;
  statusCallEnum?: StatusCallEnum;
  dateCall?: Date;
  constructor(entity: any = {}) {
    entity = entity || {};
    this.id = entity.id;
    this.company = new Company(entity.company);
    this.statusCallEnum = entity.statusCallEnum;
    this.dateCall = toDate(entity.dateCall);
  }
}