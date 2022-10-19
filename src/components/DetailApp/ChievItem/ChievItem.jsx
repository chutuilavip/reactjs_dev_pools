import React from 'react'
import cup from "../../../assets/Chievs/cup.png"
import styled from 'styled-components'


const ChievItem = ({chiev}) => {
    const {img,name,xp} = chiev
  return (
    <WrapChievItem>
        <img className='logo' src={img} alt={name} />
        <p className='name'>{name}</p>
        <div className='xp'>
            <img src={cup} alt="cup" />
            <p>{xp} XP</p>
        </div>
    </WrapChievItem>
  )
}

export default ChievItem

const WrapChievItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .logo{
      width: 120px;
      height: 120px;
    }
    .name{
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.0025em;
      color: #FFFFFF;
    }
    .xp{
      display: flex;
      gap: 7px;
      align-items: center;
      p{
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.0025em;
        color: #FFFFFF;
        opacity: 0.7;
      }
    }

`