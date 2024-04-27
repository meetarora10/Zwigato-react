export const ADD = (item) =>{
    return{
        type:"ADDTOCART",
        payload:item
    }
}
export const REMOVE = (id) =>{
    return{
        type:"REMOVECART",
        payload:id
    }
}
export const DLT = (item) =>{
    return{
        type:"REMOVEONE",
        payload:item
    }
}
