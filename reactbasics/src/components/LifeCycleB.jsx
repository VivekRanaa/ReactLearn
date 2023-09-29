import React, {Component} from 'react'
class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "Vivek"
        }
        console.log("lifecycel B const")
    }
    static getDerivedStateFromProps(props,state){
        console.log('Life cycle B getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log(" B did mount")
    }
    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Life cycle B getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("B componentDidUpdate ")
    }
    render() {
        console.log("B")
        return (
            <div>
                <h1>Life Cycle B</h1>
            </div>
        );
    }
}

export default LifeCycleB
