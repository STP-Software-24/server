import { MacathonCompetitionNameEnum } from "../utils/enums/macathon.enum";

export interface MacathonParticipant {
    fullname: string;
    national_id: string;
    email: string;
    phone_number: string;
    university: string;
    faculty: string;
    graduation_year: string;
    team_name: string;
    competition_name: MacathonCompetitionNameEnum;
    cv_url: string;
    q1: string;
    q2: string;
}

export interface MacathonTeamLeader extends MacathonParticipant {}

export interface MacathonTeamMember extends MacathonParticipant {}
