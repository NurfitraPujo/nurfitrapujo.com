import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { FaGithub } from "react-icons/fa";

export default {
  title: "Components/SocialMediaIcon",
  component: SocialMediaIcon,
  decorators: [
    (Story: Story) => (
      <div className="w-48 h-48 flex flex-row items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SocialMediaIcon>;

const Template: ComponentStory<typeof SocialMediaIcon> = (args) => (
  <SocialMediaIcon {...args}>
    <FaGithub size={45} />
  </SocialMediaIcon>
);

export const GithubIcon = Template.bind({});

GithubIcon.args = {
  text: "Testing Github Icon",
  link: "www.github.com",
};
