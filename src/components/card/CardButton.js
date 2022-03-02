import styled from "styled-components";


const CardButton = styled.button`
        opacity: 0;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        background-color: #fff;
        color:#000;
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 99;
        color: #000;
        cursor: pointer;

    &:hover {
        border: 2px solid blue;

    }

`
 


export default CardButton;