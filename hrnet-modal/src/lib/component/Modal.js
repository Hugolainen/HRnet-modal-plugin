import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Modal = (props) => {
   return (
        <ModalBackground isOpen={props.isOpen} onClick={props.onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={props.onClose}>
                        <FontAwesomeIcon icon={faCheck} />
                    </CloseButton>
                    <ModalMessage> Employee Created </ModalMessage>
            </ModalContainer>           
       </ModalBackground>
   )
}

export default Modal;

const ModalBackground = styled.div`
    position: fixed;
    top:0;
    left:0;
    cursor: default;
    width:100vw;
    height:100vh;
    background-color: rgba(250,250,250, 0.5);
    display: ${(props) => props.isOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s;

    :hover {
        background-color: rgba(216,252,250,0.8);
    }
`

const ModalContainer = styled.div`
    width: 300px;
    height: 60px;
    border-radius: 5px;
    background-color: white;
    padding:0;
    cursor: default;
    display: flex;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.2);
    box-shadow: 5px 5px 30px -6px rgba(0,0,0,0.2);
`

const CloseButton = styled.button`
    height: 100%;
    width: 60px;
    cursor: pointer;
    border-radius: 4px 0 0 4px;
    background-color: #32D7F0;
    color: white;
    border: 0;
    font-size: 30px;
`

const ModalMessage = styled.span`
    color: "#32D7F0";
    width: 100%;
`