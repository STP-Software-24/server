import { ValidatorObject, fields } from '../../types/validators.d';

export function fieldsValidator(
    fieldsValidator: ValidatorObject,
    actualFields: fields,
) {
    for (const field in actualFields) {
        const validatorField = fieldsValidator[field];
        
        if (!validatorField) {
            throw new Error(
                `This field ${field} doesn't have a validation field`,
            );
        }

        if (!actualFields[field] && !validatorField.optional) {
            throw new Error(`Required Field ${field} must not be empty`);
        }
        if (!validatorField.regex.test(actualFields[field])) {
            throw new Error(validatorField.message);
        }
    }
}
