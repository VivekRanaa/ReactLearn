import React ,{Component} from "react";

 const UpdatedComponent = OriginalComponent => {

     class NewComponent extends Component {
       constructor(props) {
           super(props);

           this.state={

               count : 0
           }
       }
          incrementcount= ()=>{
             console.log("safh")
             this.setState(prevState =>{

                 return {count : prevState.count + 1}

             })

         }
         render() {
             return (
                 <OriginalComponent count={this.state.count} incrementcount={this.incrementcount}/>
             )
         }
     }
     return NewComponent
}
export  default UpdatedComponent

