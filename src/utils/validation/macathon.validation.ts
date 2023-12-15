import { MacathonParticipant } from '../../types/macathon.registeration';
import { ValidatorObject } from '../../types/validators';
import { MacathonCompetitionNameEnum } from '../enums/macathon.enum';
import { fieldsValidator } from './global.validation';

const macathonParticipantsValidators: ValidatorObject = {
    fullname: {
        regex: new RegExp('^[a-zA-Z ]+$'),
        message: 'Full Name must be a string of characters only',
    },
    team_name: {
        regex: new RegExp('^[a-zA-Z ]+$'),
        message: 'Team Name must be a string of characters only',
    },
    competition_name: {
        regex: new RegExp(
            `^(${Object.values(MacathonCompetitionNameEnum).join('|')})$`,
        ),
        message: `competition name must be of the following ${Object.values(
            MacathonCompetitionNameEnum,
        )}`,
    },
    national_id: {
        regex: new RegExp('^[0-9]{14}$'),
        message: 'National ID must be a string of 14 digits only',
    },

    email: {
        regex: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        message: 'Email must be a valid email address',
    },

    phone_number: {
        regex: new RegExp('^0[0-9]{10}$'),
        message:
            'phone number must be an Egyptian phone number of 11 digits and the first digit is 0',
    },

    graduation_year: {
        regex: new RegExp(`^202[4-9]$`),
        message: 'must be a year from 2024 to 2029',
    },
    faculty: {
        regex: new RegExp(`.+`),
        message: 'faculty must not be empty',
    },
    university: {
        regex: new RegExp(`.+`),
        message: 'university must not be empty',
    },
    cv_url: {
        regex: new RegExp(`.*`),
        message: 'CV url must not be empty',
        optional: true,
    },

    q1: {
        regex: new RegExp(`.+`),
        message: 'q1 must not be empty',
    },
    q2: {
        regex: new RegExp(`.+`),
        message: 'q2 must not be empty',
    },
};

export function validateMacathonParticipant(participant: MacathonParticipant) {
    return fieldsValidator(macathonParticipantsValidators, participant);
}
