import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'
import {Route} from 'react-router-dom'
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'


class Wizard extends Component{
    constructor(){
        super();
    }

    render(){
        // if(this.state.redirect){
        //     return <Redirect to="/" />
        // }
        return (
            <div>
                Wizard
                <Link to='/'>Cancel</Link>
                <Route path="/wizard/step1" component={StepOne}/>
                <Route path="/wizard/step2" component={StepTwo}/>
                <Route path="/wizard/step3" component={StepThree}/>
                
                <hr />
               
            </div>
        )
    }
}


export default Wizard;