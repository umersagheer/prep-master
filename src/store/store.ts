import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { createUserSlice } from "./user-slice";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { Store } from "../types/store.type";

export const useStore = create<Store>()(
  subscribeWithSelector(
    persist(
      immer((...a) => ({
        ...createUserSlice(...a),
      })),
      { name: "local-storage" }
    )
  )
);
