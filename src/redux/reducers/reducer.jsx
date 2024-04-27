const INIT_STATE = {
    carts:[]
}
export const cartreducer =(state = INIT_STATE,action)=>{
    
    switch (action.type) {
        case "ADDTOCART":
        
            const ind=state.carts.findIndex((e)=>e.id===action.payload.id);
            if(ind >= 0){
                state.carts[ind].qnty += 1;
            }else{
                const temp={...action.payload,qnty:1}
                return{
                    ...state,
                    carts:[...state.carts,temp]
                }
            }
        case "REMOVECART":
            const data=state.carts.filter((el)=>el.id !== action.payload);
            return{
                ...state,
                carts:data
            }
        case "REMOVEONE":
            const index=state.carts.findIndex((e)=>e.id === action.payload.id);
            if(state.carts[index].qnty >= 1){
                const dltone=state.carts[index].qnty -= 1;
                return{
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[index].qnty === 1){
                const data=state.carts.filter((el)=>el.id !== action.payload.id);
                return{
                    ...state,
                    carts:data
                }
            }
        default:
        return state;
    }
}