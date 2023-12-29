import { addCompItemRequest, addCompItemSuccess} from "../slices/compSlice"
import axios from "axios"
export const addCompItem = (id,quantity) => async(dispatch) =>{
    try{
        dispatch(addCompItemRequest());
        const {data}  = await axios.get(`/api/v1/product/${id}`)
        console.log(data);
        dispatch(addCompItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price : data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            category : data.product.category,
            ratings : data.product.ratings,
            seller : data.product.seller,
            quantity
        }))
    }catch(error){

    }
}