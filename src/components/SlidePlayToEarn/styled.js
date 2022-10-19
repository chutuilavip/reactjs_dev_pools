import styled from "styled-components";

export const WrapPlayToEarn = styled.div`
  background: #181818;
  height: 70vh;
  display: flex;
  justify-content: center;
  position: relative;
`

export const BuidingText = styled.div`
display: flex;
justify-content: center;
gap: 50px;
  /* display: flex;
  width: 32%;
  flex-direction: column;
  justify-content: center; */
`

export const BuidingLeft = styled.div`
  display: flex;
  width: 32%;
  flex-direction: column;
  justify-content: center;
  .left_button{
    Button{
        margin-top: 90px;
        width: 80%;
        border-radius: 0;
        height: 50px;
        color: white;
        font-weight: 700;
        font-size: 25px;
    }
  }
`

export const BuidingRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img{
    width: 80%;
    height: max-content;
    animation-name: chiuchiu;
    animation-duration: 3s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }

  @keyframes chiuchiu {
  from {
    margin-top: -10%;
  }
  to {
    margin-bottom: -10%;
  }
}


`