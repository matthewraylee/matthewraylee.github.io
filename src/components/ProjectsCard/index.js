import React, { useState } from "react";
import caraokeLogo from "../../images/CARAOKE.png";
import openTokLogo from "../../images/opentoklogo.png";
import unityLogo from "../../images/unitylogo.png";
import imageClassLogo from "../../images/MNISTpic.jpeg";
import triplesLogo from "../../images/tripleslogo.png";
import swiftIcon from "../../images/swiftlogo.png";
import firebaseIcon from "../../images/firebaselogo.png";
import numpyIcon from "../../images/numpylogo.png";
import arduinoIcon from "../../images/arduinoLogo.png";
import cppIcon from "../../images/cppLogo.png";
import pythonIcon from "../../images/pythonLogo.png";
import PyTorchIcon from "../../images/pytorchlogo.png";
import { RxCross2 } from "react-icons/rx";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsCard,
  ProjectsWrapper,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  PopupContainer,
  PopupCard,
  PopupTitle,
  PopupDescription,
  CloseButton,
  PopupHeader,
  PopupContent,
  PopupVideo,
  PopupIconsWrapper,
  PopupIcon,
  PopupTitleWrapper,
  PopupSubtitle,
  MobileClose,
  CloseText,
} from "./ProjectsElements";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const projects = [
    {
      image: unityLogo,
      title: "Unity",
      date: "April 2023",
      description: "Social Step Tracker",
      fullDescription:
        "Unity seeks to unite the user with the environment around them. \
        Going outside, exploring, and getting exercise \
        are the core pillars of what the app stand for. This iOS app was built with \
        Swift and SwiftUI. It features a step counter, location tracking, and an in-app \
        currency that can be used to customize the user's avatar. ",
      video: "",
      icons: [swiftIcon],
    },
    {
      image: openTokLogo,
      title: "OpenTok",
      date: "May 2023",
      description: "Social App",
      fullDescription:
        "OpenTok is a social app that allows users to watch, like, and upload videos. \
        Programmed in Swift and SwiftUI, it features a video player that is pre-loaded with \
        videos sorted based on a specific algorithm, where 'unseen' videos are prioritized, \
        followed by most liked videos. In addition, videos uploaded by users will be stored in \
        Firebase's Cloud Storage along with other information that is used in the algorithm. ",
      icons: [swiftIcon, firebaseIcon],
    },
    {
      image: caraokeLogo,
      title: "Caraoke",
      date: "April 2022",
      description: "Lyrics on the Go!",
      fullDescription:
        "Caraoke is the project submitted to the 2022 Bitcamp Hackathon. \
        The team loves going on road trips but there are times some of us \
        don't know the lyrics to a song. This is what inspired us to create \
        Caraoke, where you can view lyrics to a song, synced to your Spotify \
        account, fitted in the air vents of your car. Utilizing Spotify's API, \
        we were able to get the current playing song and with the \
        help of Textyl.co's API to get the lyrics. Finally, we used an \
        Arduino Genuino 101 to send lyric informaion to our LCD screen. ",
      video: "https://www.youtube.com/embed/foeOzic5nsU",
      icons: [arduinoIcon, cppIcon, pythonIcon],
    },
    {
      image: imageClassLogo,
      title: "Image Classification",
      date: "March 2022",
      description: "Computer Vision",
      fullDescription:
        "This computer vision project studies the comparison between two machine learning models: \
        Multilayer Perceptrons (MLP) and Convolutional Neural Network (CNN) to classify the \
        MNIST dataset. This project was programmed in Python and utilized the NumPy and PyTorch \
        Library. This involves defining the network through weight and bias initialization as well as \
        performing back-propagation to allow network to continuously learn. Training with 2000 images, \
        the MLP model was able to achieve an accuracy of 88% while the CNN model was able to achieve 94%. ",
      icons: [pythonIcon, numpyIcon, PyTorchIcon],
    },
    {
      image: triplesLogo,
      title: "Triples",
      date: "February 2023",
      description: "Mini Game",
      fullDescription:
        "Triples is a mini iOS game that was programmed in Swift. This was a introductory project for creating \
        an iOS app. The game is simple, the user can swipe in any direction to move the tiles. The more tiles \
        they combine, the higher the score will be. The app keeps track of high scores and displays it on the scoreboard.",
      icons: [swiftIcon],
    },
  ];

  const openPopup = (index) => {
    setSelectedProjectIndex(index);
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        {projects.map((project, index) => (
          <ProjectsCard key={index} onClick={() => openPopup(index)}>
            <ProjectsIcon src={project.image} />
            <ProjectsH2>{project.title}</ProjectsH2>
            <ProjectsP>{project.description}</ProjectsP>
          </ProjectsCard>
        ))}
      </ProjectsWrapper>
      {showPopup && (
        <PopupContainer visible={showPopup} onClick={closePopup}>
          <PopupCard onClick={(e) => e.stopPropagation()}>
            <PopupHeader>
              <PopupTitleWrapper>
                <PopupTitle>{projects[selectedProjectIndex].title}</PopupTitle>
                <PopupSubtitle>
                  {projects[selectedProjectIndex].date}
                </PopupSubtitle>
              </PopupTitleWrapper>
              <CloseButton onClick={closePopup}>
                <CloseText>Close</CloseText>
                <MobileClose>
                  <RxCross2 />
                </MobileClose>
              </CloseButton>
            </PopupHeader>
            <PopupContent>
              <PopupDescription>
                {projects[selectedProjectIndex].fullDescription}
                <PopupIconsWrapper>
                  {projects[selectedProjectIndex].icons.map((icon, index) => (
                    <PopupIcon src={icon} key={index} />
                  ))}
                </PopupIconsWrapper>
              </PopupDescription>
              <PopupVideo
                src={projects[selectedProjectIndex].video}
              ></PopupVideo>
            </PopupContent>
          </PopupCard>
        </PopupContainer>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
