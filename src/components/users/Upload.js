import React, { Component } from 'react'
import axios from 'axios'

export default class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile:''

        }
    }

    myHandler = (events) =>{
        this.setState({
            selectedFile:events.target.file[0]
        })

    }

    submitHandler = (event)=>{
        event.preventDefault();
        console.log(this.state.selectedFile)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="file" name="myfile" onChange={this.myHandler}/>
                    <input type="submit" value="upload"  />
                </form>
            </div>
        )
    }
}