import React from 'react';
import {useDispatch} from "react-redux";
import {setData} from "../../features/tamagothiapp";

const Egg = ({egg}) => {
    const dispatch = useDispatch()

    function sellEgg() {
        fetch("http://localhost:8000/sell/"+egg.id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(setData(data.data))
            })
    }
    return (
        <div className="egg p-10 m-10">
            <p>Egg price: {egg.price}$</p>
            <button onClick={sellEgg}>Sell</button>
        </div>
    );
};

export default Egg;