import React from 'react';
import Row from './Row';

const Data = ({dataSet}) => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(dataSet[0]).map((prop, i) => <th key={i}>{prop}</th>)}
                </tr>
            </thead>
            <tbody>
                {dataSet.map(data => <Row key={data.CategoryId} row={data} />)}
            </tbody>
        </table>
    );
};

export default Data;
