import styled from 'styled-components';

const BoardContainer = styled.div`
    background: #1f163c; 
    max-width: 455px;
    width: 100%;
    max-height: 400px;
    height: 100%;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 1rem;
    justify-content: center;
    align-content: center;
    transition: z-index 1s ease, height 1s ease;
    overflow: hidden;
    @media(max-width: 1400px) {
      max-height: 350px;
      max-width: 350px;
      margin-top: 50px;
    }
`;
export default BoardContainer;
