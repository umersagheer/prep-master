import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "../ui/form";
import { Input } from "../ui/input";
import { useToast } from "../../hooks/use-toast";
import { useStore } from "../../store/store";
import { paths } from "../../paths";
import { useState } from "react";
import { useNavigate } from "react-router";

export const SignInFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(2, { message: "Username must be at least 2 characters" }),
  password: z.string().min(1, { message: "Password must be provided" }),
});

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const signIn = useStore((state) => state.signIn);
  const navigate = useNavigate();
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      setLoading(true);
      await signIn(values);
      toast({
        title: "Logged in",
      });
      navigate(paths.home);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: (
          <p>
            {error instanceof Error
              ? error.message
              : "An unknown error occurred"}
          </p>
        ),
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormDescription>Must be Valid</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
