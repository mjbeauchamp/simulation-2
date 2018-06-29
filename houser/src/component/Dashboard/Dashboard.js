import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House'
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/house_list').then( data => {
            console.log(data.data)
            this.setState({
                list: data.data
            })
        }).catch(err => {
            console.log(err)
        });
    }

    render(){
        let houseList = this.state.list.map((val, index) => {
            return <House houseInfo={val} key={index} />
        });
        return (
            <div>
                Dashboard
                <Link to='/wizard'>Add New Property</Link>
                <hr />
                {houseList}
            </div>
        )
    }
}


export default Dashboard;