import axios from 'axios';
import { SUCCESS,FAIL } from "../constants/restuarantConstants";

export const RestuarantList=()=> async(dispatch)=>{
try{
 const {data}= await axios.get('/restaurants.json')
 dispatch({
    type:SUCCESS,payload:data.restaurants
 })
console.log(data);
}
catch(error){
    dispatch({
        type:FAIL,error:error
    })
 }
}