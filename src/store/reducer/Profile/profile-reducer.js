const initialState = {
  name: '',
  birthday: '',
  profilePicture: '',
  phoneNumber: '',
  email: '',
  gender: '',
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EditProfile':
      return action.payload;
    default:
      return state;
  }
};
