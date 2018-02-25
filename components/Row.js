import React from 'react';

const Row = props => {
    return (
        <tr>
            <td>{props.row.CategoryId}</td>
            <td>{props.row.ParentCategoryId}</td>
            <td>{props.row.Name}</td>
            <td>{props.row.Keyword}</td>
        </tr>
    );
}

export default Row;
