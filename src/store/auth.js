// import { create } from "zustand";
// import { mountStoreDevtool } from "simple-zustand-devtools";

// const useAuthStore = create((get, set) => ({
//   allUserData: null,
//   loading: false,
//   user: () => ({
//     user_id: get().allUserData.id || null,
//     username: get().allUserData.full_name || null,
//   }),
//   setUser: (user) =>
//     set({
//       allUserData: user,
//     }),
//   setLoading: (loading) => set({ loading }),
//   isLoggedIn: () => get().allUserData != null,
// }));

// // if (import.meta.env.DEV) {
// //   mountStoreDevtool("Store", useAuthStore);
// // }

// export { useAuthStore };
