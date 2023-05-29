import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #01161e;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProjectsWrapper = styled.div`
  min-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-bottom: 32px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  max-width: 300px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-height: 200px;
  }
`;

export const ProjectsIconWrapper = styled.div`
  width: 75%;
  display: flex;
  align-content: center;
  background-color: red;
`;

export const ProjectsIcon = styled.img`
  height: 150px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 64px;
  padding-top: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${fadeInAnimation} 0.3s ease-in-out forwards;
  z-index: 100;
`;

export const PopupCard = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  width: 70%;
  height: 55%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PopupTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopupTitle = styled.h2`
  font-size: 3rem;
  // margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PopupSubtitle = styled.h4`
  opacity: 40%;
  margin-top: 5px;
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const PopupDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PopupVideo = styled.iframe`
  width: 560px;
  height: 315px;
  // margin-bottom: 20px;
  border: none;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-top: 20px;
  }
`;

export const PopupIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 30px;
`;

export const PopupIconDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  width: 50%;
`;

export const PopupIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 25px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const CloseText = styled.p`
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileClose = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-bottom: 25px;
    font-size: 2rem;
    cursor: pointer;
    color: black;
  }
`;
