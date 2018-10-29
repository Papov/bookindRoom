import React, {Component, Fragment} from 'react';

class RoomFacilities extends Component{
    constructor(props){
        super(props);
        const {data} = this.props;
        this.state = {
            data: data
        }
    }
    render(){
        const {data} = this.state;
        const arrayData = Object.entries(data); //returns the properties of an object with pairs [key, value].
        return(
            <Fragment>
                <span className='room__title'>Top facilities</span>
                <div className='room__facilities'>
                    {
                        arrayData.map((elem, index) => {
                            return(
                                <Fragment key={`${elem[0]}${index}`}>
                                    <div className={elem[0]}>{elem[1]}</div>  {/*pairs [key - elem[0] , value - elem[1]*/}
                                </Fragment>
                            )
                        })
                    }
                </div>
            </Fragment>

        )
    }
}

export default RoomFacilities;
