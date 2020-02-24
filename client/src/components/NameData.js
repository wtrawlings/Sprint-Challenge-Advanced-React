import React from 'react';
import useLocalStorage from "../hooks/useLocalStorage";


function NameData (props) {
    //console.log(props)
    //this one is empty
    const data = props.dataSet;
    const subClickToggle = props.clickToggle;
    console.log(subClickToggle)
    //console.log(data);
    //this one is full
    const displayData = data.map(players => {
        return(
            <div key={players.id}>
                <p>Player {players.id}: {players.name} is from {players.country} </p>
            </div>
        );
    })
    return(
        <div className="lightGrey">
            {displayData}
            {console.log(subClickToggle)}
        </div>
    )
}

export default NameData;


//const [clickToggle, setClickToggle] = useLocalStorage("key", clickToggle);