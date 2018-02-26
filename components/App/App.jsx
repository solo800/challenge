import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../Data/Data.jsx';
import CategoryForm from '../CategoryForm/CategoryForm.jsx';
import styles from './App.scss';

class App extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            result: {
                CategoryId: null,
                Name: null,
                ParentCategoryId: null,
                Keyword: null,
            },
            emptyResult: {
                Name: '-',
                ParentCategoryId: '-',
                Keyword: '-',
            },
            resultLabels: ['Name', 'ParentCategoryId', 'Keyword'],
            dataSet: [],
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount () {
        // For an app this simple this is where we'd have an api call for fetching data
        // In a more complicated app it's important to have more organized api
        // calls as well as event listeners, in React we'd use some Flux implementation for this
        const dataSet = [
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
        ];
        const result = this.state.emptyResult;

        this.setState(prevState => ({
            dataSet,
            result,
        }));
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
        // grab the input value and determine if the input matches an id
        const inputValue = event.target.value;
        const resultRow = this.getRow(inputValue);

        if (1 === resultRow.length) {
            // found an id, update the state with a new result
            this.setState(prevState => ({
                result: Object.assign({}, resultRow[0], {Keyword: this.getKeyword(resultRow)}),
            }));
        } else {
            // input does not match a row, clear the result
            this.setState(prevState => ({result: this.state.emptyResult}));
        }
    }

    render () {
        return (
            <div className={styles.mainContainer}>
                <CategoryForm
                    resultLabels={this.state.resultLabels}
                    result={this.state.result}
                    onChange={this.onChange} />
                <Data
                    dataSet={this.state.dataSet}
                    result={this.state.result} />
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
