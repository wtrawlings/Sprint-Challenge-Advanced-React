import React from 'react';

function NameData (props) {
    //console.log(props)
    //this one is empty
    const data = props.dataSet;
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
        <div>
            {displayData}
        </div>
    )
}

export default NameData;