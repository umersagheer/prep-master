import { z } from "zod";
import { StateCreator } from "zustand";
import { SignUpFormSchema } from "../components/auth/sign-up-form";
import api from "../axios/interceptor";

type UserState = z.infer<typeof SignUpFormSchema>;

type UserAction = {
  signUp: (values: z.infer<typeof SignUpFormSchema>) => void;
};

const initialState: z.infer<typeof SignUpFormSchema> = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  role: "STUDENT",
  profilePictureUrl: "",
  bio: "",
};

export type UserSlice = UserState & UserAction;

export const createUserSlice: StateCreator<
  UserSlice,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  ...initialState,
  signUp: async (values) => {
    const { data } = await api.post(
      "http://localhost:7400/user/signup",
      values
    );
    console.log(data);
    // Handle the response here
    set((state) => {
      state.firstName = data?.firstName;
      state.lastName = data?.lastName;
      state.email = data?.email;
      state.password = data?.password;
      state.role = data?.role;
      state.profilePictureUrl = data?.profilePictureUrl;
      state.bio = data?.bio;
    });
  },
});
