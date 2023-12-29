import { addWishItemRequest, addWishItemSuccess} from "../slices/wishSlice"
import axios from "axios"
export const addWishItem = (id,quantity) => async(dispatch) =>{
    try{
        dispatch(addWishItemRequest());
        const {data}  = await axios.get(`/api/v1/product/${id}`)
        console.log(data);
        dispatch(addWishItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price : data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))
    }catch(error){

    }
}