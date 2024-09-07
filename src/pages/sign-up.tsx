import SignUpForm from "../components/auth/sign-up-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { brand } from "../lib/constants";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Card className="p-3 min-w-80">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Register Yourself
          </CardTitle>
          <CardDescription className="font-semibold">
            Sign up to {brand.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
