let initialState = {
    houseName: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    image: '',
    monthlyMortgate: 0,
    desiredRent: 0
}

const GATHER_LOCATION = 'GATHER_LOCATION'

export default function reducer(state=initialState, action){
    switch(action.type){
        case GATHER_LOCATION:
            return Object.assign({}, state, {
                houseName: action.payload.houseName,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zipcode: action.payload.zipcode
            });
        default:
            return state;
    }
}

//This function returns the "action" that will be plugged in to this reducer to trigger the "Gather Location" switch case
export function gatherLocation(houseName, address, city, state, zipcode){
    return {
        type: GATHER_LOCATION,
        payload: {
            houseName: houseName,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }
    }
}