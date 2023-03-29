import { createContext, useReducer } from "react"

const initialState = {
    time: '00:00',
    greet: '--',
    phrase: '',
    phraseAuthor: ''
  };

const Context = createContext(initialState)


function reducer(state, action) {
    switch (action.type) {
      case 'SET_TIME':
        return { ...state, time: action.payload };
      case 'SET_GREET':
        return { ...state, greet: action.payload };
      case 'SET_PHRASE':
        return { ...state, phrase: action.payload };
      case 'SET_PHRASE_AUTHOR':
        return { ...state, phraseAuthor: action.payload };
      default:
        throw new Error(`Invalid action type: ${action.type}`);
    }
  }

  export { Context, reducer, initialState };