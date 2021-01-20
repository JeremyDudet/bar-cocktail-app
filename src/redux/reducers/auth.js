const authReducerDefaultState = {
  user: '',
};

export default (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.user
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};