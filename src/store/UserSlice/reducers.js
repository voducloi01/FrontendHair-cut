
const getDataUser = (
    state,
  ) => ({ ...state});

  const loginUser = ( state , action) =>{
    const check =  state.some ( e => e.userName === action.payload.userName && e.password === action.payload.password )
    const findIndex = state.findIndex(e => e.userName === action.payload.userName);
    
    if(check) {  
        state[findIndex].status = 'ThanhCong'
        
    } else {
     // state[findIndex].status = 'ThatBai'
    }
}

  export default {
    getDataUser,
    loginUser
  };