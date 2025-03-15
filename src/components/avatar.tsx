import {
  Avatar as SAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { AvatarProps } from "@radix-ui/react-avatar";

export function Avatar(props: React.PropsWithChildren<AvatarProps>) {
  return (
    <SAvatar {...props}>
      <AvatarImage src="/logo.webp" alt="clevali" />
      <AvatarFallback>CN</AvatarFallback>
    </SAvatar>
  );
}
