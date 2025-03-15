import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProps } from "@radix-ui/react-tooltip";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  content?: React.ReactNode;
}
export function MyTooltip({
  children,
  content,
  ...props
}: Props & TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200} {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        {content && <TooltipContent>{content}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}
