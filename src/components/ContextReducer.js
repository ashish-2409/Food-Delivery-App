import React, { createContext, useContext, useReducer } from 'react'

const CardStateContext = createContext();
const CardDispatchContext = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,qnt:action.qnt,size:action.size,price:action.price,img:action.img}];
        case "REMOVE":
            let narr=[...state]
            narr.splice(action.index,1)
            return arr;
            case "UPDATE":
                let arr = [...state]
                arr.find((food, index) => {
                    if (food.id === action.id) {
                        console.log(food.qnt, parseInt(action.qnt), action.price + food.price)
                        arr[index] = { ...food, qnt: parseInt(action.qnt) + food.qnt, price: action.price + food.price }
                    }
                    return arr
                })
                return arr
    
        default:
            console.log("Error in reducer");
    }
}
export const Cardprovider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,[]);
    return (
        <CardDispatchContext.Provider value = {dispatch}>
        <CardStateContext.Provider value={state}>
            {children}
        </CardStateContext.Provider>
        </CardDispatchContext.Provider>
    )
}

export const useCart = ()=> useContext(CardStateContext);
export const useDispatchCart = ()=> useContext(CardDispatchContext);