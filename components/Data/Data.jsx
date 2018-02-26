import React from 'react';
import Row from '../Row/Row.jsx';

const Data = props => {
    const dataHeaders = 0 < props.dataSet.length ? props.dataSet[0] : {};

    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(dataHeaders).map((prop, i) => <th key={i}>{prop}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.dataSet.map(data => {
                    const activeRow = props.result.CategoryId === data.CategoryId;
                    const activeKeyword = props.result.Keyword === data.Keyword;

                    return <Row
                        key={data.CategoryId}
                        row={data}
                        activeRow={activeRow}
                        activeKeyword={activeKeyword} />
                })}
            </tbody>
        </table>
    );
};

export default Data;
