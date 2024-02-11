import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

interface SocialCardProps {
  icon: JSX.Element;
  description: string[];
  title: string;
}

export const SocialCard = ({ icon, description, title }: SocialCardProps) => {
  return (
    <Card className="rounded-3xl relative">
      <CardHeader className="pb-2">
        <Card className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
          {icon}
        </Card>
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
