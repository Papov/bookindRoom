import React, {Component} from 'react';

class RoomPreview extends Component{
    constructor(props){
        super(props);
        const {data} = this.props;
        this.state = {
            data: data
        }
    }
    render(){
        const {text, src} = this.state.data;
        const background = {background: `url('${src[0]}') no-repeat 50%/cover`}
        return(
                <div className='room__preview' style={background}>
                    <div className='room__preview__second__layer'>
                        <span className='room__name'>{text.name}</span>
                        <span className='room__plus'>{text.plus}</span>
                        <span className="room__superPlus">{text.superPlus}</span>
                        <span className='photo__quantity'>{src.length}</span>
                    </div>
                </div>
        )
    }
}

export default RoomPreview;
