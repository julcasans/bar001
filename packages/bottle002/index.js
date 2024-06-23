import { getName } from 'bottle004';
import { getSurname } from 'bottle003';

export function getFullName() {
  return `${getName()} ${getSurname()}`;
}

export function getSurnameName() {
  return `${getSurname()}, ${getName()}`;
}
