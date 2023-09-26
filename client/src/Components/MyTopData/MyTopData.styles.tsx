import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin: 3px 0 10px 0;
  color: ${({ theme }) => theme.palette.highlight};
  padding-bottom: 8px;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.contrast}`};
`;

export const SectionContainer = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
`;

export const List = styled.ul`
  box-sizing: border-box;
  padding: 0 8px;
  margin: 0;
`;

export const SongGrid = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px 10px;
  
  @media(max-width: 1470px){
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media(max-width: 1050px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Song = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.palette.contrast};
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.main};
  width: 100%;

  img {
    height: 50px;
    border-radius: 4px;
  }

  h3,
  p {
    margin: 5px 0;
  }
  h3 {
    font-size: 1.05rem;
    font-weight: 700;
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.contrast2};
  }

  .text {
    box-sizing: border-box;
    padding-left: 8px;
  }
`;

export const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 190px;
  width: 100%;
  
  @media(max-width: 1720px){
    grid-template-columns: repeat(7, 1fr);
  }
  
  @media(max-width: 1600px){
    grid-template-columns: repeat(6, 1fr);
  }
  
  @media(max-width: 1250px){
    grid-template-columns: repeat(5, 1fr);
  }

  @media(max-width: 1050px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 750px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 550px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 380px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Artist = styled.div`
  background-color: ${({ theme }) => theme.palette.main};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  h3 {
    margin: 8px 16px;
    width: calc(100% - 50px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.contrast};
  }

  img{
    height: 110px;
    width: 110px;
    border-radius: 50%;
  }
`

export const ExitBtn = styled.div`
  position: absolute;
  top: 8px;
  right: 25px;
  heighty: 45px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  padding: 2px 5px 5px 8px;
  border-radius: 4px;
  border: 1px solid white;
  border-color: transparent;
  transition: .4s ease-in-out all;
  cursor: pointer;

  &:hover{
    border-color: white;
  }

  svg{
    fill: white;
    height: 20px;
    width: 20px;
    margin-left: 5px;
  }
`;