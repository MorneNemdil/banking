"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password } : signInProps) => {
    try {
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email, password)
        return parseStringify(response)
    } catch (error) {
        console.error('Error', error)
    }

}

export const signUp = async (userData: SignUpParams) => {
    try {
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(),
            userData.email,
            userData.password,
            `${userData.firstName} ${userData.lastName}`
        );
        const session = await account.createEmailPasswordSession(userData.email, userData.password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount)
    } catch (error) {
        console.error('Error', error)
    }
}

export async function getLoggedInUser() {
    try {
        // this is NOT a user account. it is a "toolkit" with tools related to account management
        // and it is used to communicate with the server
        const { account } = await createSessionClient();
        const user = await account.get();
        return parseStringify(user);
    } catch (error) {
        return null;
    }
}

export const logoutAccount = async () => {
    try {
        // delete session on client side
        cookies().delete('appwrite-session');
        
        // delete session on server side
        const { account } = await createSessionClient();
        await account.deleteSession('current');
    } catch (error) {
        return null;
    }
}
