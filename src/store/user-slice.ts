import { z } from "zod";
import { StateCreator } from "zustand";
import { SignUpFormSchema } from "../components/auth/sign-up-form";
import api from "../axios/interceptor";

type UserState = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  accessToken: string;
  profilePictureUrl: string;
  bio: string;
};

type UserAction = {
  signUp: (values: z.infer<typeof SignUpFormSchema>) => void;
};

const initialState: UserState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  accessToken: "",
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
      state.firstName = data?.user?.firstName;
      state.lastName = data?.user?.lastName;
      state.email = data?.user?.email;
      state.accessToken = data?.accessToken;
      state.password = data?.user?.password;
      state.role = data?.user?.role;
      state.profilePictureUrl = data?.user?.profilePictureUrl;
      state.bio = data?.user?.bio;
    });
  },
});
