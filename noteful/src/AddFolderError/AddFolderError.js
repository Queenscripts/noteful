import React from 'react'

export default class AddFolderError extends React.Component{ 
    constructor(props) {
        super(props)
        this.state = {
            hasError: null, 
            errorInfo: null
        }
    }      
    static getDerivedStateFromError(error){
        return{ hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: error,
            errorInfo: errorInfo
        })
    }
    render(){
        if (this.state.hasError) {
            
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}