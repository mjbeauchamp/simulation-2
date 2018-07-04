import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'
import { connect } from 'react-redux';


class StepThree extends Component{
    constructor(){
        super();
        this.state = {
            monthlyMortgate: 0,
            monthlyRent: 0
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
                this.history.push('/')
            })
            .catch(err => {
                console.log(err)
            });
    }

    updateMonthlyMortgate = (e) => {
        this.setState({
            monthlyMortgate: e.target.value
        })
    }

    updateMonthlyRent = (e) => {
        this.setState({
            monthlyRent: e.target.value
        })
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        return (
            <div>
                <input onChange={this.updateMonthlyMortgate} type="text" placeholder='Monthly Mortgage Amount'/>
                <input onChange={this.updateMonthlyRent} type="text" placeholder='Desired Monthly Rent'/>
                <hr />
                <Link to='/wizard/step2'>Previous Step</Link>
                <button onClick={this.newHouse}>Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode,
        image: state.image,

    }
}


export default connect(mapStateToProps)(StepThree);