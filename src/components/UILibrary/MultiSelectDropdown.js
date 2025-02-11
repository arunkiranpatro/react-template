import React, { useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import debounce from '../utils/Debounce';

const initalState = {
    searchText: '',
    isLoading: false,
    selectedItems: [],
    results: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
                results: [],
                searchText: action.payload,
            };
        case 'FETCH_COMPLETE':
            return { ...state, isLoading: false, results: action.payload };
        case 'SET_SEARCH_TEXT':
            return { ...state, searchText: action.payload, results: [] };
        case 'SELECT_ITEM':
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.payload],
                searchText: '',
                results: [],
            };
        default:
            throw new Error();
    }
}

function MultiSelectDropdown(props) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const { delay = 500 } = props;
    const { isLoading, results, searchText } = state;
    const searchField = useRef('');
    const _search = useRef(debounce(search, delay)).current;

    function onChangeAC(e) {
        dispatch({ type: 'SET_SEARCH_TEXT', payload: e.target.value });
        _search();
    }

    function search() {
        const query = searchField.current.value;

        dispatch({ type: 'SET_LOADING', payload: query });
        const resultPromise = props.getResults(query);
        if (
            resultPromise !== null &&
            (typeof resultPromise === 'object' ||
                typeof resultPromise === 'function') &&
            typeof resultPromise.then === 'function'
        ) {
            resultPromise.then((result) => {
                dispatch({ type: 'FETCH_COMPLETE', payload: result });
            });
        } else {
            dispatch({ type: 'FETCH_COMPLETE', payload: [] });
        }
    }

    function onSelect(e) {
        dispatch({ type: 'SELECT_ITEM', payload: e.target.innerHTML });
    }

    function renderResults() {
        let body = '';
        if (results.length > 0) {
            body = (
                <div className="autocomplete-results">
                    {results.map((result, index) => (
                        <div
                            className="autocomplete-results-row"
                            key={index}
                            id={`ac-results-${index}`}
                            onClick={onSelect}
                        >
                            {result}
                        </div>
                    ))}
                </div>
            );
        }
        return body;
    }

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                onChange={onChangeAC}
                value={searchText}
                ref={searchField}
                onClick={search}
            />
            {isLoading && <Loading />}
            {renderResults()}
            {state.selectedItems.length > 0 && (
                <div className="selected-items">
                    {state.selectedItems.map((item, index) => {
                        return (
                            <div key={index} className="selected-item">
                                {item}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

MultiSelectDropdown.propTypes = {
    getResults: PropTypes.func.isRequired,
    delay: PropTypes.number,
};

export default MultiSelectDropdown;
