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
                    <ElementP>
                      <ElementList>
                        <ElementListItem>
                          Maintained and updated several APIs responsible for
                          the operation of rail transportation across the US and
                          three provinces of Canada.
                        </ElementListItem>
                        <ElementListItem>
                          Managed lists of APIs on Cloudhub, Anypoint Platform,
                          BitBucket, Jenkins, and Postman.
                        </ElementListItem>
                        <ElementListItem>
                          Proactively attended and presented at weekly API
                          meetings with the team.
                        </ElementListItem>
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
                      Washington, DC
                    </ElementSubtitle>
                    <ElementP>
                      <ElementList>
                        <ElementListItem>
                          Guided ten students with disabilities per week to
                          create a study schedule that fits with their learning
                          style.
                        </ElementListItem>
                        <ElementListItem>
                          Explored and introduced different study methods for
                          students to try that matched their learning needs.
                        </ElementListItem>
                        <ElementListItem>
                          Received a certificate in weekly tutor training
                          alongside supervisor and peers.
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
                        Pt. Enseval Putera Megatrading
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      Jakarta, Indonesia
                    </ElementSubtitle>
                    <ElementP>
                      <ElementList>
                        <ElementListItem>
                          Created new user confirmation via email link
                          verification for customers of Indonesia’s largest
                          pharmaceutical and raw materials distributor.
                        </ElementListItem>
                        <ElementListItem>
                          Worked alongside several mentors with website hosting
                          and server management using C#, Postman, and
                          Javascript (Node.js).
                        </ElementListItem>
                        <ElementListItem>
                          Explored different IDEs and API development
                          applications.
                        </ElementListItem>
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
                        Pt. Karsa Lintas Buwana
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      Jakarta, Indonesia
                    </ElementSubtitle>
                    <ElementP>
                      <ElementList>
                        <ElementListItem>
                          Designed and implemented a website to keep track of
                          employee attendance in Indonesia’s largest
                          pharmaceutical company, division of digital healthcare
                        </ElementListItem>
                        <ElementListItem>
                          Created attendance tracking app using React,
                          JavaScript, HTML, CSS, SQL.
                        </ElementListItem>
                        <ElementListItem>
                          Continuously communicated and presented at weekly
                          meetings with the team.
                        </ElementListItem>
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
