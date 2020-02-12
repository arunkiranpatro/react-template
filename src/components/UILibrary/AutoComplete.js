import React, { useState, useReducer } from "react";
import Loading from "./Loading";

const initalState = {
  searchText: "",
  isLoading: false,
  results: []
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true, results: [] };
    case "FETCH_COMPLETE":
      return { ...state, isLoading: false, results: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload, results: [] };
    default:
      throw new Error();
  }
}

function AutoComplete(props) {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { delay = 1000 } = props;
  let { isLoading, results, searchText } = state;
  function onChangeAC(e) {
    dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value });
    let _timer;
    if (_timer) {
      clearTimeout(_timer);
      _timer = setTimeout(search, delay);
    }
    _timer = setTimeout(search, delay);
  }

  function search() {
    if (searchText !== "") {
      dispatch({ type: "SET_LOADING" });
      props.getResults(searchText).then(result => {
        dispatch({ type: "FETCH_COMPLETE", payload: result });
      });
    }
  }

  function onSelect(e) {
    dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.innerHTML });
  }

  function renderResults() {
    let body = "";
    if (results.length > 0) {
      body = (
        <div className="autocomplete-results">
          {results.map((result, index) => {
            return (
              <div
                className="autocomplete-results-row"
                key={index}
                id={"ac-results-" + index}
                onClick={onSelect}
              >
                {result}
              </div>
            );
          })}
        </div>
      );
    }
    return body;
  }

  return (
    <div className="autocomplete-container">
      <input type="text" onChange={onChangeAC} value={searchText} />
      {isLoading && <Loading />}
      {renderResults()}
    </div>
  );
}

export default AutoComplete;
