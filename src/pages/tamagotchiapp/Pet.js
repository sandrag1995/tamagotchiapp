import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import HungryBar from '../../components/tamagotchicomps/HungryBar';
import Inventory from "../../components/tamagotchicomps/Inventory";
import FeedButton from "../../components/tamagotchicomps/FeedButton";
import { setData } from '../../features/tamagothiapp';

const Pet = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.pet.data)
    const nav = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8000/getData')
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setData(data.data));
                    setIsLoading(false);
                });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function playAgain() {
        fetch('http://localhost:8000/restart')
            .then((res) => res.json())
            .then(() => {
                nav('/');
            });
    }

    const feedPet = () => {
        fetch('http://localhost:8000/feed')
            .then((res) => res.json())
            .then((data) => {
                dispatch(setData(data.data));
            });
    };




    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="d-flex tamagotchi-select">
            <div className="m-10 p-10">
                {data.hunger > 0 ?
                    <div className="p50">
                        <div className="d-flex space-between">
                            <h3>Level: {data.level}</h3>
                            <h3>XP: {data.xp}</h3>
                        </div>
                        <div className="tamagotchipet">
                            <img src={data.image} alt=""/>

                        </div>
                        <HungryBar size={data.hunger}/>
                    </div> :

                    <div className="d-flex j-center flex-column">
                        <h1 className="text-center">You Animal Is Dead Congratulations, you bastard</h1>
                        <button onClick={playAgain}>PLAY AGAIN</button>
                    </div>

                }
            </div>
            {data.hunger > 0 &&
                <div className="m-10 p-10">
                    <h3>Money: {data.money}</h3>
                    <Inventory eggs={data.eggs}/>
                    <FeedButton feed={feedPet}/>
                </div>}

        </div>
    );
};

export default Pet;