import React from 'react';
import styles from '../styles/styles.css';

const CategoryForm = props => {
    return (
        <div className='category-form'>
            <input
                onChange={props.onChange}
                name='category_id'
                val=''
                placeholder='Category ID' />
            <div className='result-row'>
                {props.resultLabels.map((label, i) => <span key={i}>{label}</span>)}
            </div>
            <div className='result-row'>
                <span>{props.result.Name}</span>
                <span>{props.result.ParentCategoryId}</span>
                <span>{props.result.Keyword}</span>
            </div>
        </div>
    );
}

export default CategoryForm;
