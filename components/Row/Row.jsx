import React from 'react';
import styles from './Row.scss';

const Row = props => {
    return (
        <tr className={props.activeRow ? styles.active : ''}>
            <td>{props.row.CategoryId}</td>
            <td>{props.row.ParentCategoryId}</td>
            <td>{props.row.Name}</td>
            <td className={props.activeKeyword ? styles.active : ''}>
                {props.row.Keyword}
            </td>
        </tr>
    );
}

export default Row;
