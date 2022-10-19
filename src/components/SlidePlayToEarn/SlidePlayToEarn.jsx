import { Button } from 'antd'
import React from 'react'
import { WrapPlayToEarn, BuidingText, BuidingLeft, BuidingRight } from './styled'
import City from '../../assets/service/city.png'

const SlidePlayToEarn = () => {
    return (
        <WrapPlayToEarn>
            <BuidingText>
                <BuidingLeft>
                    <div className="left_text">
                        <h1 className="t-white">BUILD YOUR LAND</h1>
                        <p className="t-white">
                            A LAND is a piece of The Metaverse, providing access to exclusive
                            content as well as granting the possibility to monetize your own
                            part of The Metaverse. Build experiences, host events, invite
                            friends.
                        </p>
                    </div>
                    <div className='left_button'>
                        <Button type='primary'>John now</Button>
                    </div>
                </BuidingLeft>
                <BuidingRight>
                    <img src={City} alt="city play to earn" />
                </BuidingRight>
            </BuidingText>
        </WrapPlayToEarn>
    )

}

export default SlidePlayToEarn