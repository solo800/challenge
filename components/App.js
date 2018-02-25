import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import CategoryForm from './CategoryForm';
import styles from '../styles/styles.css';

class App extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            result: {
                CategoryId: null,
                ParentCategoryId: null,
                Name: null,
                Keyword: null,
            },
            resultLabels: ['Name', 'ParentCategoryId', 'Keyword'],
            dataSet: [
                {
                    CategoryId: 100,
                    ParentCategoryId: -1,
                    Name: 'Business',
                    Keyword: 'Money',
                },
                {
                    CategoryId: 200,
                    ParentCategoryId: -1,
                    Name: 'Tutoring',
                    Keyword: 'Teaching',
                },
                {
                    CategoryId: 101,
                    ParentCategoryId: 100,
                    Name: 'Accounting',
                    Keyword: 'Taxes',
                },
                {
                    CategoryId: 102,
                    ParentCategoryId: 100,
                    Name: 'Taxation',
                    Keyword: null,
                },
                {
                    CategoryId: 201,
                    ParentCategoryId: 200,
                    Name: 'Computer',
                    Keyword: null,
                },
                {
                    CategoryId: 103,
                    ParentCategoryId: 101,
                    Name: 'Corporate Tax',
                    Keyword: null,
                },
                {
                    CategoryId: 202,
                    ParentCategoryId: 201,
                    Name: 'Operating System',
                    Keyword: null,
                },
                {
                    CategoryId: 109,
                    ParentCategoryId: 101,
                    Name: 'Small business Tax',
                    Keyword: null,
                },
            ],
        };

        this.onChange = this.onChange.bind(this);
    }

    getRow (id) {
        return this.state.dataSet.filter(data => parseInt(id) === data.CategoryId);
    }

    getKeyword (resultRow) {
        while (null === resultRow[0].Keyword) {
            resultRow = this.getRow(resultRow[0].ParentCategoryId);
        }

        return resultRow[0].Keyword;
    }

    onChange (event) {
        const inputValue = event.target.value;
        const resultRow = this.getRow(inputValue);
        const result = 1 === resultRow.length ? Object.assign({}, resultRow[0], {Keyword: this.getKeyword(resultRow)}) : {};

        this.setState(prevState => ({
            dataSet: [...prevState.dataSet],
            result: result,
        }));
    }

    render () {
        return (
            <div>
                <Data dataSet={this.state.dataSet} />
                <CategoryForm
                    resultLabels={this.state.resultLabels}
                    result={this.state.result}
                    onChange={this.onChange} />
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
