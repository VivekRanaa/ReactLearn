import React, {Component} from 'react'
import LifeCycleB from "./LifeCycleB.jsx";
class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "Vivek"
        }
        console.log("lifecycel A const")
    }
    static getDerivedStateFromProps(props,state){
        console.log('Life cycle A getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Life cycle A getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("A componentDidUpdate ")
    }

    componentDidMount() {
        console.log(" A did mount")
    }
    changestate=()=>{
        this.setState({
            name: "Vivek"
        })
    }

    render() {
        console.log("a render")
        return (

            <>
                        <h1>Life Cycle A</h1>
                <button onClick={this.changestate}>Change State</button>
                         <LifeCycleB />
            </>
        );
    }
}

export default LifeCycleA
