import LoginForm from "../components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { brand } from "../lib/constants";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Card className="p-3 min-w-80">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
          <CardDescription className="font-semibold">
            Login to {brand.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
