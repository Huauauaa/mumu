import {
  isEnumKey,
  DayOfWeek,
  enumToKeys,
  enumToValues,
  enumValueToKey,
  enumToEntries,
  fromEnum,
} from '../src/week';

console.log(isEnumKey(DayOfWeek, DayOfWeek[DayOfWeek.Friday])); // true
console.log(isEnumKey(DayOfWeek, DayOfWeek[DayOfWeek.Monday])); // true
console.log(isEnumKey(DayOfWeek, 'hello')); // false

console.log('enumToKeys', enumToKeys(DayOfWeek));
console.log(enumToValues(DayOfWeek));

console.log(enumValueToKey(DayOfWeek, DayOfWeek.Friday)); // Friday
console.log(enumValueToKey(DayOfWeek, DayOfWeek.Monday)); // Monday
console.log(enumValueToKey(DayOfWeek, 996)); // undefined

console.log(enumToEntries(DayOfWeek));

interface Option<T> {
  label: keyof T;
  value: T[keyof T];
}
const options: Option<typeof DayOfWeek>[] = fromEnum(
  DayOfWeek,
  ([label, value]: [keyof typeof DayOfWeek, DayOfWeek]) => ({
    label,
    value,
  }),
);
console.log(options);
