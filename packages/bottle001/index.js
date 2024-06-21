import { getFullName } from 'bottle002';
import { getSurname } from 'bottle003';
import { getName } from 'bottle004';

export function getTitleAndFullName() {
  return `Mr. ${getFullName()}`;
}

export function getShortName() {
  const names = getName().split(' ');
  let shortName = '';
  names.forEach((name, index) => {
    shortName = shortName + name.charAt(0) + '.';
  });

  return `${shortName} ${getSurname()}`;
}

console.log(getTitleAndFullName());
console.log(getShortName());
