import { WorkshopEnum } from '../utils/enums/workshop.enums';

export type WorkshopParticipant = {
    fullname: string;
    national_id: string;
    email: string;
    phone_number: string;
    university: string;
    faculty: string;
    graduation_year: string;
    workshop: WorkshopEnum;
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
    q6?: string;
    q7?: string;
};
