import styled from 'styled-components';
import { IoIosMusicalNotes } from 'react-icons/io';

export const LandingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  @media(max-width: 890px){
    flex-direction: column;
  }
`

export const ImageWrapper  = styled.div`
  height: 100vh;
  width: 40vw;
  min-width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0 30px 30px 30px;
  
  h1{
    width: 300px;
    text-align: right;
    color: white;
    font-size: 6rem;
    position: relative;
    letter-spacing: -5px;
    z-index: 10;
    line-height: 4.8rem;
    font-weight: bold;
    margin: 10px 0 5px 0;
  }

  @media(max-width: 890px){
    min-width: initial;
    width: 100%;
    height: 40vh;
    align-items: center;
    padding: 0;

    h1{
      width: 250px;
      text-align: center;
    }
  }
  @media(max-width: 550px){

    h1{
      width: 170px;
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
  }
`;
export const MainImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  z-index: 0;
`;

export const Content = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h3{
    max-width: 70%;
    color: white;
    font-weight: 300;
    line-height: 1.5rem;
    margin: 40px 0;
  }

  @media(max-width: 890px){
    width: 100%;
    height: 60vh;
  }
  `
  
  export const Button = styled.div`
      background-color: transparent;
      background: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      border: 2px solid white;
      border-radius: 30px;
      color: white;
      height: 45px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      transition: .2s ease-in-out all;
      width: 170px; 
      &:hover{
        background-color: #ffffff15;
      }

      p{
        margin: 0;
      }

      img.spinner{
        height: 30px;
        width: 30px;
      }

      svg.spotify {
        margin-right: 15px;
        height: 25px;
        width: 25px;
      }
    `


export const PoweredBy = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
`;

export const SpotifyLogo = styled.img`
  height: 30px;
  margin: 0 8px;
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    transform: scale(0.9);
    
    svg{
      height: 35px;
      width: 35px;
      margin: 0 8px;
      fill: ${({ theme }) => theme.palette.highlight};
    }
`;

export const NoteIcon = styled(IoIosMusicalNotes)`
    padding: 5px;
    border-radius: 50%;
    height: 28px !important;
    width: 28px !important;
    fill: black !important;
    background-color: ${({ theme }) => theme.palette.highlight};
`