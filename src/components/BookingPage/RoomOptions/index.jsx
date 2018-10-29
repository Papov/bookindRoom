import React, {Component, Fragment} from 'react';
import RoomOptionItem from "./RoomOptionItem";

class RoomOptions extends Component{
    constructor(props) {
        super(props);
        const {data} = this.props;
        this.state = {
            data: data
        }
    }
    render(){
        const {data} = this.state;
        return(
            <div className='room__options'>
                {
                    data.map(elem => <RoomOptionItem key={elem.id} data={elem}/>)
                }
                <span className='moreDetails'>+ more 2 rates</span>
            </div>
        )
    }
}

export default RoomOptions;
