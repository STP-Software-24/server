import { dbClient } from '../services/database';
import { RecruitmentMember } from '../types/members.recruitment';

export async function addMember(member: RecruitmentMember) {
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
      q4
    )
    VALUES (
      '${member.department}',
      '${member.name}',
      '${member.mobile}',
        '${member.email}',
      '${member.areaOfResidency}',
      '${member.university}',
      '${member.faculty}',
      '${member.graduationYear}',
      '${member.firstPreference}',
      '${member.secondPreference}',
      '${member.reasonForApplying}',
      '${member.previousExperience}',
      '${member.q1}',
      '${member.q2}',
      '${member.q3}',
      '${member.q4}'
    );
  `;

    try {
        return await dbClient.query(insertQuery);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
