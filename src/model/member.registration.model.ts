import { QueryResult } from 'pg';
import { dbClient } from '../services/database';
import { OrganizationUser } from '../types/member.registration';

export async function dbAddUser(user: OrganizationUser) {
    const insertQuery = `
  INSERT INTO users (
    name,
    phone_number,
    email,
    area_of_residence,
    confirmation_card_path
  )
  VALUES (
    $1, $2, $3, $4, $5
  )
`;

    const values = [
        user.name,
        user.phoneNumber,
        user.email,
        user.areaOfResidency,
        user.confirmationCardPath,
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
    SELECT
    id,
    name,
    phone_number,
    email,
    area_of_residence,
    confirmation_card_path
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
