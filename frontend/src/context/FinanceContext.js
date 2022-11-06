import React, { createContext, useReducer } from 'react'

export const FinanceContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FINANCE":
            return {
                finances: action.payload
            }
        case "ADD_FINANCE":
            return {
                finances: [action.payload, ...state.finances]
            }
        case "DELETE_FINANCE":
            return {
                finances: state.finances.filter(item => item._id !== action.payload._id)
            }
        default:
            return state
    }
}

function FinanceContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, {finances: null})
  return (
    <FinanceContext.Provider value={{...state, dispatch}}>
        {children}
    </FinanceContext.Provider>
  )
}

export default FinanceContextProvider