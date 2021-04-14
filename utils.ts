import * as moment from 'moment';

export function toDate(date: any): any {
  return date ? moment(date, 'YYYY-MM-DD').toDate() : undefined;
}

export function isEntity(value: any, entity: object) {
  return value || entity ;
}

export function arrayToString(array: Array<string>, label: any, separator = ', ') {
  return array.map(item => label ? item[label] : item).join(separator)
}