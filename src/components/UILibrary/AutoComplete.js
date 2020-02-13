import React, { useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const initalState = {
    searchText: '',
    isLoading: false,
    results: [],
};
let _timer;

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
        default:
            throw new Error();
    }
}

function AutoComplete(props) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const { delay = 500 } = props;
    const { isLoading, results, searchText } = state;
    const searchField = useRef('');

    function onChangeAC(e) {
        dispatch({ type: 'SET_SEARCH_TEXT', payload: e.target.value });
        if (_timer) {
            clearTimeout(_timer);
            _timer = setTimeout(search, delay);
        } else {
            search();
            _timer = setTimeout(() => {
                _timer = void 0;
            }, delay);
        }
    }

    function search() {
        const searchText = searchField.current.value;
        if (searchText !== '') {
            dispatch({ type: 'SET_LOADING', payload: searchText });
            const resultPromise = props.getResults(searchText);
            if (
                resultPromise !== null &&
                (typeof resultPromise === 'object' ||
                    typeof resultPromise === 'function') &&
                typeof resultPromise.then === 'function'
            ) {
                resultPromise.then(result => {
                    dispatch({ type: 'FETCH_COMPLETE', payload: result });
                });
            } else {
                dispatch({ type: 'FETCH_COMPLETE', payload: [] });
            }
        }
    }

    function onSelect(e) {
        dispatch({ type: 'SET_SEARCH_TEXT', payload: e.target.innerHTML });
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
        />
        {isLoading && <Loading />}
        {renderResults()}
      </div>
    );
}

AutoComplete.propTypes = {
    getResults: PropTypes.func.isRequired,
};

export default AutoComplete;
