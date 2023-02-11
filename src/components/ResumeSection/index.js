import React, { useState } from "react";
import {
  ResumeContainer,
  ResumeHeader,
  ResumeH1,
  ResumeMenu,
  ResumeItem,
  ResumeWrapper,
  ResumeContent,
  EducationContainer,
  WorkContainer,
  ElementTitle,
  ElementSubtitle,
  ElementP,
  ElementList,
  ElementListItem,
  ElementSkills,
  ElementSkillsLogo,
  ElementHeaderWrapper,
  Link,
} from "./ResumeElements";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const ResumeSection = ({ toggle }) => {
  const [showEducation, setShowEducation] = useState(true);

  const educationOn = () => setShowEducation(true);
  const workOn = () => setShowEducation(false);

  return (
    <>
      <ResumeContainer id="resume">
        <ResumeWrapper>
          <ResumeHeader>
            <ResumeH1>My Journey</ResumeH1>
            <ResumeMenu>
              <ResumeItem onClick={educationOn}>Education</ResumeItem>
              <ResumeItem onClick={workOn}>Experience</ResumeItem>
            </ResumeMenu>
          </ResumeHeader>

          <ResumeContent>
            {showEducation && (
              <EducationContainer>
                <VerticalTimeline lineColor="#F6AE2D">
                  <VerticalTimelineElement
                    date="Aug 2020 - May 2023"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<FaGraduationCap />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="http://www.umd.edu" target="_blank">
                        University of Maryland
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      College Park, MD
                    </ElementSubtitle>
                    <ElementP>
                      Bachelor of Science, Computer Science {"\n"}Minor in
                      Innovation and Entrepreneurship
                    </ElementP>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    date="Sep 2018 - Jun 2020"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<FaGraduationCap />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="http://www.greenriver.edu" target="_blank">
                        Green River College
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      Auburn, WA
                    </ElementSubtitle>
                    <ElementP>
                      Associates in Science, Computer Science Track
                    </ElementP>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </EducationContainer>
            )}
            {!showEducation && (
              <WorkContainer>
                <VerticalTimeline lineColor="#F6AE2D">
                  <VerticalTimelineElement
                    date="May 2021 - Aug 2022"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper>
                      <ElementTitle className="vertical-timeline-element-title">
                        <Link
                          href="https://www.amtrak.com/home.html"
                          target="_blank"
                        >
                          Amtrak
                        </Link>
                      </ElementTitle>
                      <ElementSubtitle className="vertical-timeline-element-subtitle">
                        Washington, DC
                      </ElementSubtitle>
                    </ElementHeaderWrapper>

                    <ElementP>
                      <ElementList>
                        <ElementListItem>
                          Maintained and updated several APIs responsible for
                          the operation of rail transportation
                        </ElementListItem>
                        <ElementListItem>
                          Proactively attended and presented at weekly API
                          meetings with the team
                        </ElementListItem>
                        <ElementSkills>
                          <ElementSkillsLogo
                            src={require("../../images/jenkins.png")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/mulesoft.avif")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/bitbucket.png")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/postman.svg")}
                          />
                        </ElementSkills>
                      </ElementList>
                    </ElementP>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    date="Apr 2019 - Mar 2020"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link
                        href="https://www.greenriver.edu/students/trio/"
                        target="_blank"
                      >
                        TRiO Student Support Services
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      Auburn, WA
                    </ElementSubtitle>
                    <ElementP>
                      <ElementList>
                        <ElementListItem>
                          Guided ten students with disabilities weekly
                        </ElementListItem>
                        <ElementListItem>
                          Explored and introduced different study methods for
                          students
                        </ElementListItem>
                        <ElementListItem>
                          Received a certificate in weekly tutor training
                        </ElementListItem>
                        <ElementListItem>
                          Tutor Subjects: Computer Science (Java, Python, C++),
                          College-level Mathematics.
                        </ElementListItem>
                      </ElementList>
                    </ElementP>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    date="Aug 2019 - Sep 2019"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://www.enseval.com/" target="_blank">
                        PT. Enseval Putera Megatrading
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      Jakarta, Indonesia
                    </ElementSubtitle>
                    <ElementP>
                      <ElementList>
                        <ElementListItem>
                          Created new customer verification via email
                        </ElementListItem>
                        <ElementListItem>
                          Worked alongside mentors with website hosting and
                          server management
                        </ElementListItem>
                        <ElementSkills>
                          <ElementSkillsLogo
                            src={require("../../images/csharp.png")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/postman.svg")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/nodejs.png")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/react.png")}
                          />
                        </ElementSkills>
                      </ElementList>
                    </ElementP>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    date="Jul 2018 - Aug 2018"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://www.kalcare.com/" target="_blank">
                        PT. Karsa Lintas Buwana
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      Jakarta, Indonesia
                    </ElementSubtitle>
                    <ElementP>
                      <ElementList>
                        <ElementListItem>
                          Designed and implemented employee attendance tracking
                          website
                        </ElementListItem>
                        <ElementListItem>
                          Continuously communicated and presented at weekly
                          meetings with the team.
                        </ElementListItem>
                        <ElementSkills>
                          <ElementSkillsLogo
                            src={require("../../images/css.svg")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/html.png")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/react.png")}
                          />
                          <ElementSkillsLogo
                            src={require("../../images/mysql.png")}
                          />
                        </ElementSkills>
                        {/* <ElementListItem>
                          Created attendance tracking app using React,
                          JavaScript, HTML, CSS, SQL.
                        </ElementListItem> */}
                      </ElementList>
                    </ElementP>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </WorkContainer>
            )}
          </ResumeContent>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
};

export default ResumeSection;
