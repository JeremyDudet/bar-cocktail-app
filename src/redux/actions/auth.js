
export const login = (user) => ({
  type: 'LOGIN',
  user
});

export const logout = () => ({
  type: 'LOGOUT'
});

// export const startLogout = () => {
//   return () => {
//     return firebase.auth().signOut();
//   };
// };

