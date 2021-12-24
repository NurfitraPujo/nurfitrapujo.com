import * as Tooltip from "@radix-ui/react-tooltip";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialMediaIcon } from "../SocialMediaIcon/SocialMediaIcon";

function Footer() {
  return (
    <div className="flex flex-row items-center justify-between  mx-10 my-5">
      <div className=" md:hidden">
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger>
              <b className="text-white">P.S.</b>
            </Tooltip.Trigger>
            <Tooltip.Content
              side="top"
              sideOffset={3}
              align="start"
              avoidCollisions={false}
            >
              <div className="bg-blue p-1">
                <p className="text-white font-display text-sm">
                  Looking for open source projects!
                </p>
              </div>
              <Tooltip.Arrow className="fill-blue" />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <div className="hidden md:flex max-w-2xl text-white text-base flex-row items-center md:items-baseline md:align-baseline space-x-4">
        <b>P.S.</b>
        <p>
          I’m searching for Open Source projects to contribute to. Feel free to
          contact me if you need help in your projects!
        </p>
      </div>
      <div className="self-end flex flex-row space-x-6 last:mr-0 m-10 text-white">
        <SocialMediaIcon
          name="Nurfitra Pujo Santiko Email Link Button"
          text="Contact me here!"
          link="https://mail.google.com/mail/u/0/?fs=1&to=fitrapujo@gmail.com"
        >
          <FaEnvelope size="28px" />
        </SocialMediaIcon>
        <SocialMediaIcon
          name="Nurfitra Pujo Santiko Github Link Button"
          text="Let's collaborate!"
          link="https://github.com/NurfitraPujo"
        >
          <FaGithub size="28px" />
        </SocialMediaIcon>
        <SocialMediaIcon
          name="Nurfitra Pujo Santiko Linkedin Link Button"
          text="More about me here"
          link="https://www.linkedin.com/in/nurfitrapujo/"
        >
          <FaLinkedin size="28px" />
        </SocialMediaIcon>
      </div>
    </div>
  );
}

export default Footer;
