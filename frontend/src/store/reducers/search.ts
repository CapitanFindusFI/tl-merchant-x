import { createAction, createReducer } from "@reduxjs/toolkit"

type ReducerType = {
    query: string,
    isLoading: boolean,
    error: boolean,
    result: any,
}

const initialState: ReducerType = {
    query: '',
    isLoading: false,
    error: false,
    result: null
}

const setQuery = createAction<string, "@search/setQuery">("@search/setQuery");
const setLoading = createAction<null, "@search/setLoading">("@search/setLoading");
const setError = createAction<null, "@search/setError">("@search/setError");
const setResult = createAction<any, "@search/setResult">("@search/setResult");

const searchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setQuery, (state, action) => {
            return {
                ...state,
                query: action.payload
            }
        })
        .addCase(setLoading, (state) => {
            return {
                ...state,
                isLoading: true,
                error: false,
                result: null
            }
        })
        .addCase(setError, (state) => {
            return {
                ...state,
                isLoading: false,
                error: true,
                result: null
            }
        })
        .addCase(setResult, (state, action) => {
            return {
                ...state,
                isLoading: false,
                error: false,
                result: action.payload
            }
        })
})

export default searchReducer