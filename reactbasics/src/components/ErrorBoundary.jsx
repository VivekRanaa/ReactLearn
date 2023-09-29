import React,{Component} from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
                return{
                    hasError: true
                }

    }
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return (
            <>
                <h1>{this.props.children}</h1>
            </>
        );
    }
}

export default ErrorBoundary
