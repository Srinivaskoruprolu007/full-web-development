import { create } from "zustand";

const useAuthentication = create((set) => ({
  user: null,
  register: async (email, password) => {
    if (email === "user@example.com" && password === "password") {
      set({ user: { email } });
    } else {
      throw new Error("Registration failed");
    }
  },
  login: async (email, password) => {
    if (email === "user@example.com" && password === "password") {
      set({ user: { email } });
    } else {
      throw new Error("Invalid credentials");
    }
  },
  logout: () => set({ user: null }),
  sendPasswordResetEmail: async (email) => {
    if (email === "user@example.com") {
      console.log("Password reset email sent to", email);
    } else {
      throw new Error("Invalid email");
    }
  },
}));

export default useAuthentication;
