import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'
import { connect } from 'react-redux';
import {gatherLocation} from '../../ducks/reducer'

class StepOne extends Component{
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
        // if(this.state.redirect){
        //     return <Redirect to="/" />
        // }
        console.log(this.props)
        return (
            <div>
                <input onChange={this.updateName} type="text" placeholder='Name'/>
                <input onChange={this.updateAddress} type="text" placeholder='Address'/>
                <input onChange={this.updateCity} type="text" placeholder='City'/>
                <input onChange={this.updateState} type="text" placeholder='State'/>
                <input onChange={this.updateZipcode} type="text" placeholder='Zipcode'/>
                <hr />
                <Link onClick={gatherLocation} to='/wizard/step2'>Next Step</Link>
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
        zipcode: state.zipcode
    }
}


export default connect(mapStateToProps, {gatherLocation: gatherLocation})(StepOne);