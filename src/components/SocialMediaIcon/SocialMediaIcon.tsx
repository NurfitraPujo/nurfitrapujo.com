import * as Tooltip from "@radix-ui/react-tooltip";
import { SocialMediaIconProps } from "../../types/components/SocialMediaIcon/SocialMediaIcon";

function SocialMediaIcon({ children, text, link }: SocialMediaIconProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <a href={link} target={"_blank"} rel="noreferrer">
            {children}
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side="top" align="center">
          <div className="bg-blue px-1 py-1.5 border-none">
            <p className="text-white font-display">{text}</p>
          </div>
          <Tooltip.Arrow className="fill-blue border-none" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export { SocialMediaIcon };
