import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from 'bcrypt-ts-edge';
import type nextauthconfig from 'next-auth';

export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in'
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' }
            },
            authorize: async (credentials: any) => {
                if (credentials == null) return null;
                let user = null;

                // logic to verify if the user exists
                user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email as string,
                    },
                });
                if (user && user.password) {
                    const ismatch = await compareSync(  credentials.password, user.password);

                    //if the password is correct, return the user
                    if (ismatch) {
                        return {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                            role: user.role,
                        };
                    }
                }

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    throw new Error("Invalid credentials.");
                }

                // return user object with their profile data
                return null;
            }
        })
    ],
    callbacks: {
        async session({ session, user, trigger, token }: any) {
            //set the user id from the token
            session.user.id = token.sub as string;

            //if there is an update,set the user name 
            if (trigger === 'update') {
                session.user.name = token.name;
             //   session.user.email = token.email;
             //   session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user, account, profile, trigger, session }: any) {
            if (trigger === 'update') {
                token.name = session.user.name;
            }
            return token;
        }
    },
    } satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config); 