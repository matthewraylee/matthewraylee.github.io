import React from "react";
import Icon1 from "../../images/CARAOKE.png";
import Icon2 from "../../images/Pe-eR.png";
import Icon3 from "../../images/CARAOKE.png";
import Icon4 from "../../images/CARAOKE.png";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsCard,
  ProjectsWrapper,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectsIconWrapper
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          {/* <ProjectsIconWrapper> */}
            <ProjectsIcon src={Icon1} />
          {/* </ProjectsIconWrapper> */}
          <ProjectsH2>Caraoke</ProjectsH2>
          <ProjectsP>Lyrics Viewer </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Pe-er</ProjectsH2>
          <ProjectsP>
            Lyrics Viewer Lorem Lyrics Viewer Lorem Lyrics Viewer Lorem{" "}
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Image Stitching</ProjectsH2>
          <ProjectsP>
            Lyrics Viewer Lorem Lyrics Viewer Lorem Lyrics Viewer Lorem{" "}
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>Image Stitching</ProjectsH2>
          <ProjectsP>
            Lyrics Viewer Lorem Lyrics Viewer Lorem Lyrics Viewer Lorem{" "}
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
