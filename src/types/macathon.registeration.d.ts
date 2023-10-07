export interface MacathonParticipant {
    fullname: string;
    national_id: string;
    email: string;
    phone_number: string;
    university: string;
    faculty: string;
    graduation_year: string;
    team_name: string;
    cv_url: string;
    q1: string;
    q2: string;
}

export interface MacathonTeamLeader extends MacathonParticipant {}

export interface MacathonTeamMember extends MacathonParticipant {}
