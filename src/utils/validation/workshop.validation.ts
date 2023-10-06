import { ValidatorObject } from '../../types/validators';
import { WorkshopParticipant } from '../../types/workshop-participants';
import { WorkshopEnum } from '../enums/workshop.enums';
import { fieldsValidator } from './global.validation';

const workshopParticipantsValidators: ValidatorObject = {
    fullname: {
        regex: new RegExp('^[a-zA-Z ]+$'),
        message: 'must be a string of characters only',
    },

    national_id: {
        regex: new RegExp('^[0-9]{14}$'),
        message: 'must be a string of 14 digits only',
    },

    email: {
        regex: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        message: 'must be a valid email address',
    },

    phone_number: {
        regex: new RegExp('^0[0-9]{10}$'),
        message:
            'must be an Egyptian phone number of 11 digits and the first digit is 0',
    },

    graduation_year: {
        regex: new RegExp(`^20[2-9][0-9]$`),
        message: 'must not be a past year',
    },
    faculty: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
    },
    university: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
    },
    workshop: {
        regex: new RegExp(`^(${Object.values(WorkshopEnum).join('|')})$`),
        message: `must be of the following workshops ${Object.values(
            WorkshopEnum,
        )}`,
    },

    q1: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
    },
    q2: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
    },
    q3: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
    },
    q4: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
    },
    q5: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
    },
    q6: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
        optional: true,
    },
    q7: {
        regex: new RegExp(`/.+/`),
        message: 'must not be empty',
        optional: true,
    },
};

export function validateWorkshopParticipants(participant: WorkshopParticipant) {
    return fieldsValidator(workshopParticipantsValidators, participant);
}
