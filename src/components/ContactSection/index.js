import React from "react";
import {
  ContactContainer,
  ContactRow,
  ContactWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  LinkButton,
  LinkIconWrapper,
  LinkWrapper,
} from "./ContactElements";
import { LuMail } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const email = "matthew.r.lee2023@gmail.com";
  const linkedinProfileUrl = "https://www.linkedin.com/in/matthewraylee/";
  const githubProfileUrl = "https://www.github.com/matthewraylee/";

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${email}`;
  };

  //   const [isHovered, setIsHovered] = useState(false);

  //   const handleHover = () => {
  //     setIsHovered(!isHovered);
  //   };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactRow>
          <Column1>
            <TextWrapper>
              <TopLine>Hope you had a wonderful time exploring.</TopLine>
              <Heading lightText={true}>Let's Talk!</Heading>
              <Subtitle darkText={false}>
                Seeking Full-time Opportunities
                <span role="img" aria-label="eyes"> 👀</span>
              </Subtitle>
              <LinkWrapper>
                <LinkButton onClick={handleEmailButtonClick}>
                  <LinkIconWrapper>
                    <LuMail />
                  </LinkIconWrapper>
                  Contact Me
                </LinkButton>
                <LinkButton
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIconWrapper>
                    <FaLinkedin />
                  </LinkIconWrapper>
                  LinkedIn
                </LinkButton>
                <LinkButton
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIconWrapper>
                    <FaGithub />
                  </LinkIconWrapper>
                  GitHub
                </LinkButton>
              </LinkWrapper>
            </TextWrapper>
          </Column1>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
