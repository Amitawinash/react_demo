import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            {name:"ram", age:20},
            {name:"abhi", age:30},
            {name:"om", age:40},
        ],
        title:"Users List"

    };

    makeMeYounger = () => {
        const { users } = this.state;
        users.map((user)=>{
            user.age = user.age + 10;
        });
        this.setState({
            users: users
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.makeMeYounger}>make me 10 years younger</button>
                <br/>
                <h1>{this.state.title}</h1>

                <User age ={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age ={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age ={this.state.users[2].age}>{this.state.users[2].name}</User>
            </div>
            
        )
    }
}

export default Users;