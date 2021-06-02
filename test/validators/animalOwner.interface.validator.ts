/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv = require('ajv');
import AnimalOwner from '../interfaces/animalOwner.interface';
export const ajv = new Ajv({"allErrors":true,"coerceTypes":false,"format":"fast","nullable":true,"unicode":true,"uniqueItems":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {AnimalOwner};
export const AnimalOwnerSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "defaultProperties": [
  ],
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "phone": {
      "type": [
        "null",
        "string"
      ]
    },
    "surname": {
      "type": [
        "null",
        "string"
      ]
    }
  },
  "required": [
    "id",
    "name",
    "phone",
    "surname"
  ],
  "type": "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>
export const isAnimalOwner = ajv.compile(AnimalOwnerSchema) as ValidateFunction<AnimalOwner>;
export default function validate(value: unknown): AnimalOwner {
  if (isAnimalOwner(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(isAnimalOwner.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: 'AnimalOwner'}) +
      '\n\n' +
      inspect(value),
    );
  }
}