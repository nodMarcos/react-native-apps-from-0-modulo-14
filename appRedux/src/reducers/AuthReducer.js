const initialState = {
  email: 'admin@admin.com',
  password: '1231232'
};

const AuthReducer = (state = [], action) => {

  if(state.length == 0){
      return initialState;
  }

  if(action.type == 'EDIT_EMAIL'){
      return{
          ...state, email:action.payload.email
      };
  }

  if(action.type == 'EDIT_PASSWORD'){
      return{
          ...state, password:action.payload.password
      }
  }

  return state;
};

export default AuthReducer;