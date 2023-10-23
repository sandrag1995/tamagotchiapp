import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData, setError } from "../../features/tamagothiapp";
import { useNavigate } from "react-router-dom";

const SelectPet = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const petArray = [
        'https://tamagotchi-official.com/tamagotchi/jp/character/2023/06/01/vmvwFIfcQhNWer4p/%E3%81%BE%E3%82%81%E3%81%A3%E3%81%A1_%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97%E6%AD%A3%E6%96%B9%E5%BD%A2.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyiiQSMefDdz_k-LdGfVLFG22UoO2LYf5vg&usqp=CAU',
        'https://i.pinimg.com/originals/2e/c0/4c/2ec04c82cf5b074a355061d59604012d.png',
        'https://www.models-resource.com/resources/big_icons/27/26137.png?updated=1530176750',
    ];

    const selectPet = (num) => {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({}),
        };

        fetch("http://localhost:8000/start/" + num)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    dispatch(setError(data.message));
                } else {
                    dispatch(setData(data.data));
                    navigate("/petapp");
                }
            })
            .catch((error) => {
                dispatch(setError("Failed to fetch data"));
                console.error(error);
            });
        console.log("loading...")
    };



    return (
        <div className="tamagotchi-select"  style={{ height: "100vh" }}>
            <div className="select-pet d-flex justify-center align-items-center">
                <h1 style={{backgroundColor: "rgba(255, 15, 91, 0.59)"}}>TAMAGOTCHI</h1>
                <h2 style={{backgroundColor: "rgba(255, 15, 91, 0.59)"}}>Select your pet:</h2>
                <div className="pets p-10 d-flex gap-20">

                    <div>
                        <img src="https://tamagotchi-official.com/tamagotchi/jp/character/2023/06/01/vmvwFIfcQhNWer4p/%E3%81%BE%E3%82%81%E3%81%A3%E3%81%A1_%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97%E6%AD%A3%E6%96%B9%E5%BD%A2.png" alt="" onClick={() => selectPet(1)}/>
                    </div>
                    <div onClick={() => selectPet(2)}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyiiQSMefDdz_k-LdGfVLFG22UoO2LYf5vg&usqp=CAU" alt=""/>
                    </div>
                    <div onClick={() => selectPet(3)}>
                        <img src="https://i.pinimg.com/originals/2e/c0/4c/2ec04c82cf5b074a355061d59604012d.png" alt=""/>
                    </div>
                    <div onClick={() => selectPet(4)}>
                        <img src="https://www.models-resource.com/resources/big_icons/27/26137.png?updated=1530176750" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectPet;