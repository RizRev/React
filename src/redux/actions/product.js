import axios from "axios";

export const  productPost = (data,navigate) => async (dispact) =>{
    try{
        dispact({type:"PRODUCT_POST_PENDING"})
        const result = await axios.post("http://localhost:4000/products/",data)
        const productData = result.data.data
        localStorage.setItem("product",productData.token)
        dispact({type:"PRODUCT_POST_SUCCESS",payload: productData})
        navigate('/product')
        console.log("product post success")
    } catch(err){
        console.log("product post err")
        console.log(err)
    }
}