import { useReducer, useState } from "react";



function Couter(){
    // const [count, setCount] = useState(0)

    //useReducer

    function reducer(state, action){
        switch (action.type) {
            case '+': return state + 1;
            case '-': return state - 1;
            default: return state;
    }}

    const [count, dispatch] = useReducer(reducer, 0)

    return(
        <>
            <h3>{count}</h3>
            <button onClick={() => dispatch({type: '+'})}>+</button>
            <button onClick={() => dispatch({type: '-'})}>-</button>
        </>
    )

}
export default Couter;