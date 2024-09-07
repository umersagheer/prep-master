import { z } from "zod";
import { StateCreator } from "zustand";
import { SignUpFormSchema } from "../components/auth/sign-up-form";
import api from "../axios/interceptor";


type UserState = z.infer<typeof SignUpFormSchema> & AccessTokenSchema

type UserAction = {
  signUp: (values: z.infer<typeof SignUpFormSchema>) => void;
};
 

const initialState: UserState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  role: "STUDENT",
  profilePictureUrl: "",
  accessToken:"",
  bio: "",
};

type  AccessTokenSchema = {
  accessToken: string,
}


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
