import React from 'react';
import styles from './CategoryForm.scss';

const CategoryForm = props => {
    return (
        <div className={styles.result}>
            <input
                onChange={props.onChange}
                name='category_id'
                val=''
                placeholder='Category ID' />
            <table>
                <thead>
                    <tr>
                        {props.resultLabels.map((label, i) => <th key={i}>{label}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.result.Name}</td>
                        <td>{props.result.ParentCategoryId}</td>
                        <td>{props.result.Keyword}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CategoryForm;
