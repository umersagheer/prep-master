import { useNavigate } from "react-router";
import LoginForm from "../components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { brand } from "../lib/constants";
import { useStore } from "../store/store";
import { toast } from "../hooks/use-toast";
import { useEffect } from "react";

export default function LoginPage() {
  const accessToken = useStore((state) => state.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
      toast({
        title: "You are already logged in",
        description: "You are already logged in",
      });
    }
  }, [accessToken]);

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
