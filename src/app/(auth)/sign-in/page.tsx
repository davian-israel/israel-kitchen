import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In",
    description: "Sign in to your account",
}

const SigninPage = () => {
    return (
        <div>
            <Card>
                <CardHeader className="space-y-4">
                    <Link href="/sign-up" className="flex-center">
                        <Button variant="link" className="text-muted-foreground">
                            Don't have an account? Sign up
                        </Button>
                    </Link>
                    <CardTitle className="text-2xl text-center">Sign in</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email below to sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/*   <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div> */}
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Sign in</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SigninPage;
