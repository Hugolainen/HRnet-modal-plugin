import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import checkMark from './check-mark.svg';

const Modal = (props) => {
   return (
        <ModalBackground isOpen={props.isOpen} onClick={props.onClickOutside ? props.onClickOutside : props.onConfirm}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={props.onConfirm}>
                        <img src={checkMark} alt="check-mark" />
                    </CloseButton>
                    <ModalMessage> {props.message ? props.message : "Whatever you did, it is confirmed"} </ModalMessage>
            </ModalContainer>           
       </ModalBackground>
   )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    message: PropTypes.string,
    onClickOutside: PropTypes.func,
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
    width: fit-content;
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
    padding:auto;
    border: 0;

    img {
        max-width: 40px;
    }
`

const ModalMessage = styled.span`
    color: "#32D7F0";
    margin-left: 20px;
    margin-right: 20px;
`