'use client'

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInDefaultValues } from "@/lib/constants";
import { signInSchema } from "@/lib/validations/auth";
import {useActionState} from "react"
import {signInWithCredentials} from "@/lib/actions/user.actions";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const CredentialsSigninForm = () => {
    const [data, action] = useActionState(signInWithCredentials, 
        {
        success: false,
        message: "",
    });
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: signInDefaultValues,
    });
    return (
    
    <form>

        <div >
            <div >
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required
                    autoComplete="email"
                    defaultValue={signInDefaultValues.email}
                />
            </div>
            <div >
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required
                    autoComplete="current-password"
                    defaultValue={signInDefaultValues.password} />
            </div>
            <div>
                <Button type="submit" className="w-full" variant="default">Sign in</Button>
            </div>
           {/*  {data && !data.success && (
                <div className="text-center text-destructive">
                    {data.message}</div>
            )} */}
            {/* <div className="text-sm text-center text-muted-foreground">
                <Link href="/sign-up" className="flex-center">
                    <Button variant="link" className="text-muted-foreground">
                        Don't have an account? Sign up
                    </Button>
                </Link>
            </div> */}
        </div>
    </form>
    )
};


export default CredentialsSigninForm;