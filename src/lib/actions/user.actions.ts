"use server";

import { signInSchema } from "../validators";
import {signIn, signOut} from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";



//sign in user with credentials
export async function signInWithCredentials (formData: FormData){
   try {
     const validatedFields = signInSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    await signIn('credentials', validatedFields);

    return {success: true, message:  "Signed in successfully"};

}catch (error){
    if(isRedirectError(error)){
        throw error;
    }
    
    console.log(error);
    return {success: false, message:  "Invalid email or password"};
  }   
}

//sign user out
export async function signOutUser(){
    await signOut();
    return {success: true, message:  "Signed out successfully"};
}

