import { SUCCESS,FAIL } from "../constants/restuarantConstants";
    export const restuarantListReducers=(state={restuarant:[]},action)=>{
        switch(action.type){

            case SUCCESS:
                return {restuarant:action.payload}
            case FAIL:
                return {restuarant:action.error}
            default:
                return state
        }
    }
