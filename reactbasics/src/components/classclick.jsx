import React, {Component} from 'react';

class cclicks extends Component {
    clicks(){
        console.log("click");
    }
    render() {

        return (
            <div>
                <button onClick={this.clicks}>click me</button>
            </div>
        );
    }
}

export default cclicks;