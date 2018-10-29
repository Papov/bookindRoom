import React, {Component, Fragment} from 'react';
import data from '../../data.json';
import RoomDetails from "./RoomDetails";
import RoomOptions from "./RoomOptions";

class BookingPage extends Component{
    render(){
        return(
            <Fragment>
                {
                    data.map(element => {
                        let roomDetail = element.roomDetail;
                        let roomOptions = element.roomOptions;
                        return(
                            <div key={roomDetail.id} className='booking__page container'>
                                <div className="box__shadow">
                                    <RoomDetails data={roomDetail} />
                                    <RoomOptions data={roomOptions}/>
                                </div>
                            </div>

                        )
                    })
                }
            </Fragment>
        )
    }
}

export default BookingPage;
