import React from "react";
class User extends React.Component{    
    constructor(props)
    {
        super(props)
        this.state = {name: "Amit"}        
    }
    shouldComponentUpdate()
    {      
    console.log("shouldComponentUpdate fucntion called")  
      return true 
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("getSnapshotBeforeUpdate fucntion called")
        console.log("Name before update was "+prevState.name)
    }
    changeName = () =>{
        console.log("changeName fucntion called")
        this.setState({name: "John"})       
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate called after usding component")
    }
    render()
    {
        return(
            <div>
                <h1> My Name is {this.state.name}</h1>
                <button type="button" onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}
export default User;