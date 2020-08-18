import React, {useReducer, createContext, useContext} from 'react'

const PortfolioContext = createContext()
const {Provider} = PortfolioContext

const reducer = (state, action) => {
    return {
        currentProject: action
    }
}

const PortfolioProvider = ({value=[], ...props}) => {

    const [state, dispatch] = useReducer(reducer, {currentObject: null})

    return <Provider value={[state, dispatch]} {...props}/>

}

const usePortfolioContext = () => {
    return useContext(PortfolioContext)
}

export {PortfolioProvider, usePortfolioContext}