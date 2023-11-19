import { createContext, useReducer } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const initialState = {
    chatHistory: [],
    loading: false,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SEND_MESSAGE":
        return {
          ...state,
          chatHistory: [...state.chatHistory, action.payload],
        };
      case "SEND_MESSAGE_SUCCESS":
        return {
          ...state,
          chatHistory: [...state.chatHistory, action.payload],
          loading: false,
        };
      case "RECEIVE_MESSAGE_SUCCESS":
        return {
          ...state,
          chatHistory: [...state.chatHistory, action.payload],
          loading: false,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
