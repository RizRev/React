// "data": {
//     "id": "9a5ea0af-65d1-44cd-b843-800f0624a026",
//     "email": "eanpraha@gmail.com",
//     "fullname": "ean js",
//     "role": "toko",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVhbnByYWhhQGdtYWlsLmNvbSIsInJvbGUiOiJ0b2tvIiwiaWF0IjoxNjY4NTY1NDkxLCJleHAiOjE2Njg1NjkwOTF9.kxF8Ru0WmQrAKESMoIF_f9eJt8XwXomekqpU7U1KOAk"
//   },
const initialState = {
    user : {
        id:"",
        email:"",
        fullname:"",
        role:"",
        token:""
    },
    isLoading: false
}

const userReducer = (state=initialState, action) =>{
    if(action.type === 'USER_LOGIN_PENDING'){
        return{
            ...state,
            isLoading : true
        } 
    } else if(action.type === 'USER_LOGIN_SUCCESS'){
        return{
            ...state,
            user:action.payload,
            isLoading : false
        } 
    } else {
        return state
    }
}

export default userReducer