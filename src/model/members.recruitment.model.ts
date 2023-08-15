import { dbClient } from '../services/database';
import { RecruitmentMember } from '../types/members.recruitment';

export async function dbAddMember(member: RecruitmentMember) {
    const insertQuery = `
  INSERT INTO members_recruitment (
    name,
    mobile,
    email,
    areaofresidency,
    university,
    faculty,
    department,
    graduationyear,
    firstpreference,
    subfirstpreference,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    reasonforapplying,
    previousexperience,
    secondpreference,
    subsecondpreference
  )
  VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
  )
`;

    const values = [
        member.name,
        member.mobile,
        member.email,
        member.areaOfResidency,
        member.university,
        member.faculty,
        member.department,
        member.graduationYear,
        member.firstPreference,
        member.subFirstPreference,
        member.q1,
        member.q2,
        member.q3,
        member.q4,
        member.q5,
        member.q6,
        member.reasonForApplying,
        member.previousExperience,
        member.secondPreference,
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
    SELECT
    id,
    name,
    mobile,
    email,
    areaofresidency,
    university,
    faculty,
    department,
    graduationyear,
    firstpreference,
    subfirstpreference,
    reasonforapplying,
    previousexperience,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    secondpreference,
    subsecondpreference
  FROM members_recruitment
  ORDER BY id; 
  `;

    try {
        return await dbClient.query(selectQuery);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
