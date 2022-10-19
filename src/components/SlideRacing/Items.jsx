import React from 'react'
import { ItemShow } from './styled'
import ItemImg from '../../assets/SlideRacing/image.png'
import ButtonPlay from '../../assets/SlideRacing/buttonplay.png'
import { useNavigate } from 'react-router-dom'


const Items = () => {
    const navigater = useNavigate()

    const handleShowDetail = () => {
        navigater(`/detail/${'hi'}`)
    }
    return (
        <ItemShow onClick={handleShowDetail}>
            <img src={ItemImg} alt="image " className='img_bg' />
            <img src={ButtonPlay} alt='play' className='button_play' />
            <div className="detail_item">
                <div className="text_i">
                    <div className="_tit">Assassin Creed</div>
                    <div className="_tex">Activision</div>
                </div>
            </div>
        </ItemShow>
    )
}

export default Items