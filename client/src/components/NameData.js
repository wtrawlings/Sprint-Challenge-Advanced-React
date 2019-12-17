import React from 'react';

function NameData (props) {
    console.log(props)
    const data = props.dataSet;

    const displayData = data.map(players => {
        return(
            <div>
                <p>Player {players.id}: {players.name} is from {players.country} </p>
            </div>
        );
    })
    return(
        <div>
            <p>{displayData} </p>
        </div>
    )
}

export default NameData;