import React, { useEffect }from 'react';
import useLocalStorage from "../hooks/useLocalStorage";


function NameData (props) {
    //console.log(props)
    //this one is empty
    const [clickTracker, setClickTracker] = useLocalStorage("key", "");
    //this is what calls the useLocalStorage hook
    const clicker = props.clickToggle
    useEffect(() => {
        setClickTracker(clicker)
    }, [clicker]);
    //this was made to control the updates with props.clickToggle
    const data = props.dataSet;
    const subClickToggle = clicker;
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
   
        </div>
    )
}

export default NameData;


//