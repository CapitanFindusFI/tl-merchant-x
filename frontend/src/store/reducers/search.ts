import { createAction, createReducer } from "@reduxjs/toolkit"

type ReducerType = {
    query: string,
    isLoading: boolean,
    error: any,
    result: any,
}

const initialState: ReducerType = {
    query: '',
    isLoading: false,
    error: null,
    result: null
}

const setQuery = createAction<string, "@search/setQuery">("@search/setQuery");
const setLoading = createAction<boolean, "@search/setLoading">("@search/setLoading");
const setError = createAction<string, "@search/setError">("@search/setError");
const setResult = createAction<any, "@search/setResult">("@search/setResult");

const searchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setQuery, (state, action) => {
            return {
                ...state,
                query: action.payload
            }
        })
        .addCase(setLoading, (state, action) => {
            return {
                ...state,
                isLoading: action.payload,
                error: null,
                result: null
            }
        })
        .addCase(setError, (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                result: null
            }
        })
        .addCase(setResult, (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: null,
                result: action.payload
            }
        })
})

export default searchReducer