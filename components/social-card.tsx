import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

interface SocialCardProps {
  icon: string;
  description: string[];
  title: string;
}

export const SocialCard = ({ icon, description, title }: SocialCardProps) => {
  return (
    <Card className="rounded-3xl relative">
      <CardHeader className="pb-3">
        <Image
          src={icon}
          alt="icon"
          width={40}
          height={40}
          className="w-[40px] h-[40px] rounded-xl"
        />
      </CardHeader>
      <CardContent className="pb-2">
        {description.map((text, key) => (
          <CardDescription key={key}>{text}</CardDescription>
        ))}
      </CardContent>
      <CardFooter className="absolute bottom-0">{title}</CardFooter>
    </Card>
  );
};

// https://open.spotify.com/playlist/52ujyIugSAiTRwaQFnwKhL?si=991a0a38c32142e8