import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'

class Wizard extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            redirect: false
        }
    }

    newHouse = () => {
        let name= this.state.name;
        let address = this.state.address;
        let city = this.state.city;
        let state = this.state.state;
        let zipcode = this.state.zipcode;
        axios.post('/house', {name, address, city, state, zipcode})
            .then(data => {
                console.log(data)
                this.setState({
                    redirect: true
                })
            })
            .catch(err => {
                console.log(err)
            });
    }

    updateZipcode = (e) => {
        this.setState({
            zipcode: e.target.value
        })
    }

    updateState = (e) => {
        this.setState({
            state: e.target.value
        })
    }

    updateName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    updateAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    updateCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    render(){
        if(this.state.redirect){
            return <Redirect push to="/" />
        }
        return (
            <div>
                Wizard
                <Link to='/'>Cancel</Link>
                <hr />
                <input onChange={this.updateName} type="text" placeholder='Name'/>
                <input onChange={this.updateAddress} type="text" placeholder='Address'/>
                <input onChange={this.updateCity} type="text" placeholder='City'/>
                <input onChange={this.updateState} type="text" placeholder='State'/>
                <input onChange={this.updateZipcode} type="text" placeholder='Zipcode'/>
                <button onClick={this.newHouse}>Complete</button>
            </div>
        )
    }
}


export default Wizard;