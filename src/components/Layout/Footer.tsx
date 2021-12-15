import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialMediaIcon } from "../SocialMediaIcon/SocialMediaIcon";

function Footer() {
  return (
    <div className="self-end flex flex-row space-x-6  mr-10 mb-10 text-white">
      <SocialMediaIcon
        text="Contact me here!"
        link="https://mail.google.com/mail/u/0/?fs=1&to=fitrapujo@gmail.com"
      >
        <FaEnvelope size="28px" />
      </SocialMediaIcon>
      <SocialMediaIcon
        text="Let's collaborate!"
        link="https://github.com/NurfitraPujo"
      >
        <FaGithub size="28px" />
      </SocialMediaIcon>
      <SocialMediaIcon
        text="More about me here"
        link="https://www.linkedin.com/in/nurfitrapujo/"
      >
        <FaLinkedin size="28px" />
      </SocialMediaIcon>
    </div>
  );
}

export { Footer };
