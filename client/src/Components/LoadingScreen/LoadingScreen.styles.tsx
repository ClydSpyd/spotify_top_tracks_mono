import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    color: white;
  }
`

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Loader = styled.img`
  margin: auto;
  height: 120px;
  width: 120px;
`;