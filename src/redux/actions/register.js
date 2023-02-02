import axios from "axios";

export const  RegisterUsersToko = (data,navigate) => async (dispact) =>{
    try{
        dispact({type:"USER_register_PENDING"})
        const result = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/register/toko`,data)
        const user = result.data.data
        console.log(result)
        // localStorage.setItem("DATA",user.data)
        dispact({type:"USER_register_SUCCESS",payload: user})
        navigate('/login-seller')
        console.log("user register success")
    } catch(error){
        console.log("user register error")
        console.log(error)
    }
}

export const  RegisterUsersPengunjung = (data,navigate) => async (dispact) =>{
    try{
        dispact({type:"USER_register_PENDING"})
        const result = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/register/pengunjung`,data)
        const user = result.data.data
        console.log(result)
        // localStorage.setItem("DATA",user.data)
        dispact({type:"USER_register_SUCCESS",payload: user})
        navigate('/login-customer')
        console.log("user register success")
    } catch(error){
        console.log("user register error")
        console.log(error)
    }
}