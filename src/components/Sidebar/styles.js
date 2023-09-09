import styled from 'styled-components';

export const Container = styled.div`
  background-color: palevioletred;
  position: fixed;
  height: 84.5%;
  top: 15vh;
  width:20em;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 2px;


  animation: showMenuMobile .4s;
  > svg {
    font-size: 3em;
    color: white;
    width: 10px;
    height: 10px;
    margin-top: 10px;
    margin-left: 250px;
    cursor: pointer;
    
  }

  
  @keyframes showMenuMobile {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  
  font-size: 2em;
`;

