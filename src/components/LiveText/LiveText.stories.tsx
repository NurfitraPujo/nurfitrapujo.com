import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LiveText } from "./LiveText";

export default {
  title: "Components/LiveText",
  component: LiveText,
} as ComponentMeta<typeof LiveText>;

const Template: ComponentStory<typeof LiveText> = (args) => (
  <LiveText {...args} />
);

export const Default = Template.bind({});

export const WithLiveTitle = Template.bind({});

WithLiveTitle.args = {
  liveTitle: ["Testing LiveText component...", "Testing finished."],
};
