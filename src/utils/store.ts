import { ActionTypes, UserType } from "./definitions";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Initial state should be null or an empty object based on your type definitions
const INITIAL_STATE: UserType = {
    user: {
        token: "",
    level: "",
    firstName: "Tosin",
    lastName: "Vincent",
    username: "TVINCENT",
    email: "tvincent@ecobank.com",
    role: "Application Support",
    phoneNumber: ""
    },
};

export const useUserStore = create(
    persist<UserType & ActionTypes>(
        (set) => ({
            user: INITIAL_STATE.user,
            addUserInfo(user) {
                set({ user }); // Directly set the user
            },
            destroyUserInfo() {
                set({ user: {
                    token: "",
                level: "",
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                role: "",
                phoneNumber: ""
                } }); // Set user to null
            },
        }),
        { name: "user", skipHydration: true }
    )
);
