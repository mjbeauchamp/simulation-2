import React, {Component} from 'react';
import axios from 'axios';


class OneHouse extends Component{
    constructor(){
        super();
        this.state = {
            house: {}
        }
    }

    componentDidMount(){
        this.getHouse()
    }

    getHouse = () => {
        axios.get(`/house/${this.props.match.params.id}`).then( data => {
            console.log(data.data)
            this.setState({
                house: data.data[0]
            })
        }).catch(err => {
            console.log(err)
        });
    }

    render(){
        console.log(this.state.house)
        console.log(this.props.match.params.id)
        // let houseList = this.state.list.map((val, index) => {
        //     return <House houseInfo={val} key={index} />
        // });
        return (
            <div>
                <h1>{this.state.house.house_name}</h1>
                <p>{this.state.house.address}</p>
                <p>{this.state.house.city}</p>
            </div>
        )
    }
}


export default OneHouse;