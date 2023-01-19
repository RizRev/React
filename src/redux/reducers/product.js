const initialState = {
    dataProduct : {data: []},
    isLoading: false
}

const productReducer = (state=initialState, action) =>{
    if(action.type === 'PRODUCT_POST_PENDING'){
        return{
            ...state,
            isLoading : true
        } 
    } else if(action.type === 'PRODUCT_POST_SUCCESS'){
        return{
            ...state,
            dataProduct:action.payload,
            isLoading : false
        } 
    } else {
        return state
    }
}

export default productReducer