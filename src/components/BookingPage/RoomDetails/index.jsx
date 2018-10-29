import React, {Component, Fragment} from 'react';
import RoomPreview from "./RoomPreview/index";
import RoomSettings from "./RoomSettings/index";
import RoomFacilities from "./RoomFacilities";

class RoomDetails extends Component{
    constructor(props){
        super(props);
        const {data} = this.props;
        this.state = {
            data: data
        }
    }
    render(){
        const {data} = this.state;
        return(
            <Fragment>
                <div className='room__details'>
                    <RoomPreview data={data.images}/>
                    <div className='room__description'>
                        <RoomSettings data={data.settings} />
                        <RoomFacilities data={data.facilities} />
                        <span className='moreDetails'>+ more details</span>
                    </div>
                </div>
                <span className='in__room__price'>{data.inRoomPricing}</span>
            </Fragment>
        )
    }
}

export default RoomDetails;
