import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin: 3px 0 10px 0;
  color: ${({ theme }) => theme.palette.highlight};
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

export const Song = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.palette.contrast};
  box-sizing: border-box;
  padding: 5px;
  border-radius: 8px;

  img {
    border: 1px solid #d2d2d2;
    height: 50px;
    border-radius: 8px;
  }

  h3,
  p {
    margin: 0px 0;
  }
  h3 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.9rem;
  }

  .text {
    box-sizing: border-box;
    padding-left: 8px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  grid-auto-rows: 190px;
  
  @media(max-width: 1400px){
    grid-template-columns: repeat(5, 1fr);
  }

  @media(max-width: 1100px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 760px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 600px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 420px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Artist = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.contrast};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    margin: 5px 0 0;
    max-width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img{
    height: 100px;
    width: 100px;
    border-radius: 16px;
  }
`