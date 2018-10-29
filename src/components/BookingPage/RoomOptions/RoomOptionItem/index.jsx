import React, {Component, Fragment} from 'react';

class RoomOptionItem extends Component{
    constructor(props) {
        super(props);
        const {data} = this.props;
        this.state = {
            data: data
        }
    }
    render(){
        const {cancelation, payInfo, facilities, price, id} = this.state.data;
        return(
            <div className='room__option__item'>
                <div className='priceInfo'>
                    <span className='cancelation'>{cancelation.text}{tooltip(cancelation)}</span>
                    <span className='pay__info'>{payInfo.text}{tooltip(payInfo)}</span>
                </div>
                <div className='facilities'>
                    {
                        Object.keys(facilities).map((key, index) => {
                            return(
                                <span key={`${key}_${index}`} className={key}>{facilities[key].text}{tooltip(facilities[key])}</span>
                            )
                        })
                    }
                </div>
                <div className="room__price">
                    {
                        Object.keys(price).map((key, index) => {
                            return(
                                <span key={`${key}_${index}`} className={key}>{price[key].text}{tooltip(price[key])}</span>
                            )
                        })
                    }
                </div>
                <div className="bookButton__container" data-href={id}>
                    <div onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} className='bookButton' data-href={id}>BOOK NOW</div>
                </div>
            </div>
        )
    }

    mouseDown(e){
        e.target.classList.add('active');
    }

    mouseUp(e){
        e.target.classList.remove('active');
    }
}

const tooltip = data => {
    if(data.tooltip){
        return(
            <span className='tooltip' data-tooltip={data.tooltip}></span>
        )
    }else return
}

export default RoomOptionItem;
