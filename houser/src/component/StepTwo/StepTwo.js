import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'
import { connect } from 'react-redux';


class StepTwo extends Component{
    constructor(){
        super();
        this.state = {
            image: ''
        }
    }

    updateImage = (e) => {
        this.setState({
            image: e.target.value
        })
    }

    render(){
        return (
            <div>
                <input onChange={this.updateImage} type="text" placeholder='Image URL'/>
                <hr />
                <Link to='/wizard/step1'>Previous Step</Link>
                <Link to='/wizard/step3'>Next Step</Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        image: state.image
    }
}


export default connect(mapStateToProps)(StepTwo);