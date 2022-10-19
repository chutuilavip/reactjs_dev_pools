import React from 'react'
import { WrapService, ImageBanner } from './styled'
import Banner from '../../assets/service/bannerservice.png'
const SlideService = () => {
    return (
        <WrapService>
            <ImageBanner src={Banner} alt="banner game" />
        </WrapService>
    )
}

export default SlideService