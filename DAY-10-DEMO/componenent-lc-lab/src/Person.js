import React from 'react'

class Person extends React.Component
{
    constructor(props)
    {
        super(props);        
        console.log("Constructor Block");
        this.state = {fname: "Kapil"}
    }
    static getDerivedStateFromProps(props,state)
    {
        return {fname: props.name}
    }
    componentDidMount()
    {
        console.log("componentDidMount function called")
    }
    render()
    {
        console.log("Render Block");        
        return(
            <h1>Person Component {this.state.fname}</h1>
        )
    }
}

export default Person;