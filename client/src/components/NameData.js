import React from 'react';

function NameData (props) {
    console.log(props)
    const data = props.dataSet;

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