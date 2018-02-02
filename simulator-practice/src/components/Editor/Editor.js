import React, { Component } from 'react';
import axios from 'axios'
import App from '../../App'


export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email:'',
        },
        {
            users:[]
        }
    }

    handleChange (e) {
        let {value,name} = e.target
        this.setState(_=>{
            let newState={};
            newState[name]=value;
            console.log(newState)
            return newState;
            
        })
    }
    addUser ()  {
        // console.log(res)
        // axios.post(`/api/users`, this.state).then((res)=>{
        //     this.props.set("users", res.data) 

            
        // })
    }
    saveUser (e) {
       if(this.state.name){
           this.addUser()
       }
    }
    render() {
        return (
            <div>
                <span>
                    <div>
                        <label>Name</label>
                        <input type="text" name = 'name' value={this.state.name} onChange={(e)=>this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name = 'email' value={this.state.email} onChange={(e)=>this.handleChange(e)}></input>
                    </div>
                    <span>
                        <button onClick={(e)=>this.saveUser(e)}>Save</button>
                        
                    </span>
                </span>
            </div>
        )
    }
}