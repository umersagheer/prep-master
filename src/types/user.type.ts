export type SignUp = {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: "STUDENT" | "INSTRUCTOR" | "ADMIN";
  profilePictureUrl: string | null;
  bio: string | null;
};
