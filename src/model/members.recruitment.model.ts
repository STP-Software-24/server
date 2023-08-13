import { dbClient } from '../services/database';
import { RecruitmentMember } from '../types/members.recruitment';

export async function dbAddMember(member: RecruitmentMember) {
    const insertQuery = `
  INSERT INTO members_recruitment (
    department,
    name,
    mobile,
    email,
    areaofresidency,
    university,
    faculty,
    graduationyear,
    firstpreference,
    secondpreference,
    reasonforapplying,
    previousexperience,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    subfirstpreference,
    subsecondpreference
  )
  VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
  )
`;

    const values = [
        member.department,
        member.name,
        member.mobile,
        member.email,
        member.areaOfResidency,
        member.university,
        member.faculty,
        member.graduationYear,
        member.firstPreference,
        member.secondPreference,
        member.reasonForApplying,
        member.previousExperience,
        member.q1,
        member.q2,
        member.q3,
        member.q4,
        member.q5,
        member.q6,
        member.subFirstPreference,
        member.subSecondPreference,
    ];

    console.log(insertQuery, values);
    try {
        return await dbClient.query(insertQuery, values);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function dbGetAllMembersApplication() {
    const selectQuery = `
    SELECT * FROM members_recruitment;
  `;

    try {
        return await dbClient.query(selectQuery);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
