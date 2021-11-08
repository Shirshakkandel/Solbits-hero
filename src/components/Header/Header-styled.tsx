import styled from 'styled-components/macro'

export const HeaderStyledFlex = styled.div<{ width: number }>`
  background: #000000;
  height: ${({ width }) => (width >= 992 ? '100px' : '50px')};
  display: flex;
  color: white;
  align-items: center;
  font-family: 'Nunito', sans-serif;
`

export const HeaderLeft = styled.div<{ width: number }>`
  margin-left: ${({ width }) => (width >= 992 ? '50px' : '20px')};
  font-family: 'Comic Sans MS';
  flex: 0.2;
  white-space: nowrap;
  margin-right: 10px;
  .page {
    font-family: 'Comic Sans MS';
    font-size: ${({ width }) => (width >= 992 ? '30px' : '15px')};
  }

  .vol {
    font-size: ${({ width }) => (width >= 992 ? '40px' : '20px')};
    font-weight: bolder;
  }
`

export const HeaderRight = styled.div<{ width: number }>`
  margin-right: 30px;
  flex: 0.8;
  justify-self: flex-start;
  text-align: center;

  .character {
    font-size: ${({ width }) => (width >= 992 ? '25px' : '12px')};
    white-space: nowrap;
  }
  .lorem {
    margin-bottom: 5px;
    font-size: ${({ width }) => (width >= 992 ? '25px' : width >= 786 ? '20px' : '10px')};
    color: #ffff0f;
  }
`
