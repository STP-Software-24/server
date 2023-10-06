import { QueryResult } from 'pg';
import { dbClient } from '../services/database';
import { OrganizationUser } from '../types/member.registration';

export async function dbAddUser(user: OrganizationUser) {
    const insertQuery = `
  INSERT INTO users (
    Name,
    Phone_Number,
    Email,
    Area_Of_Residence
  )
  VALUES (
    $1, $2, $3, $4
  )
`;

    const values = [
        user.name,
        user.phoneNumber,
        user.email,
        user.areaOfResidency,
    ];

    try {
        console.log(insertQuery, values);
        return await dbClient.query(insertQuery, values);
    } catch (error) {
        console.error((error as Error).message);
        throw new Error((error as Error).message);
    }
}

export async function dbGetAllUsers() {
    const selectQuery = `
    SELECT *
  FROM users
  ORDER BY id; 
  `;

    try {
        return (await dbClient.query(
            selectQuery,
        )) as QueryResult<OrganizationUser>;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function dbEmailExists(email: string) {
    const selectQuery = `
    SELECT count(*) FROM users WHERE email = $1
  `;
    try {
        return await dbClient.query(selectQuery, [email]);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function dbPhoneExists(phoneNumber: string) {
    const selectQuery = `
    SELECT count(*) FROM users WHERE phone_number = $1
  `;
    try {
        return await dbClient.query(selectQuery, [phoneNumber]);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
