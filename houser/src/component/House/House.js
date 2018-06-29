import React from 'react';
import {Link} from 'react-router-dom'

function House(props){
    console.log(props.houseInfo)
    let house = props.houseInfo;
    return (
        <div>
            <h1>{house.house_name}</h1>
            <Link to={"/house/" + props.houseInfo.id}>See More Info</Link>
            <h2>{house.address}</h2>
            <h2>{house.city}</h2>
            <h2>{house.state}</h2>
            <h2>{house.zipcode}</h2>
            <button>Delete</button>
            <hr />
        </div>
    )
}


export default House;