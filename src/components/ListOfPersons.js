import React from 'react';


const ListOfPersons = ({ data }) => {
    const loop = data.map(y => {
        return (
            <div className="card" key={y.id}>
                <h2>{y.name}</h2>
                <h2>{y.job}</h2>
                <h2>{y.gender}</h2>
            </div>
        )
    })
    return (
        <div>
            {loop}          {/* Mora biti JSX, zato je neophodan div element */}
        </div>
    )
}


export default ListOfPersons;