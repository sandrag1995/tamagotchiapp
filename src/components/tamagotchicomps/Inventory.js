import React from 'react';
import Egg from "./Egg";

const Inventory = ({eggs}) => {
    return (
            <div className="laid-eggs d-flex flex-wrap m-10 p-10">
                {eggs.map((x, i) => <Egg key={i} egg={x}/>)}
            </div>
    );
};

export default Inventory;