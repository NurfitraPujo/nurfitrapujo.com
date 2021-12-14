import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Base } from "./Base";

export default {
  title: "Layout/Base",
  component: Base,
  staticDirs: "../../public",
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

export const BaseLayout = Template.bind({});
