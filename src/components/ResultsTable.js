import React, { useState } from 'react';

export default function ResultsTable(props) {
    //For showing the details table
    const [seeDetails, setSeeDetails] = useState(false);

    const keys = (Object.keys(props.data));
    let getAverage = 0;
    keys.forEach(element => {
        getAverage += parseFloat(props.data[element][1]) / 9;
    });

    return (
        <div>
            <div className='averageDiv'>
                <h3>The average Life Satisfaction in UK in {props.year}: </h3>
                <h3>{getAverage.toFixed(2)}</h3>
                <button className='btn btn-outline-dark btn-sm' onClick={() => setSeeDetails(!seeDetails)}>See Full Details</button>
            </div>
            <div className='seeDetails' style={{ display: seeDetails ? 'block' : 'none' }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Region</th>
                            <th scope="col">Life Satisfaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {keys.map(element => {
                            return <tr key={element}>
                                <th scope='row'>{keys.indexOf(element) + 1}</th>
                                <td>{props.data[element][0]}</td>
                                <td>{props.data[element][1]}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}