import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const PortfolioCard = () => {
  return (
    <Card className="rounded-3xl relative row-span-2 col-span-2">
      <CardHeader>
        <Card className="w-[40px] h-[40px] rounded-xl"></Card>
      </CardHeader>
      <CardContent className="pb-2">
        <CardTitle>Michkov Eugene | Portfolio</CardTitle>
      </CardContent>
      <CardFooter className="absolute bottom-0 flex-col items-start gap-4">
        <Badge>Version v2.0 coming soon! 🎉 </Badge>
        <Image src="logo.svg" alt="EM" width={1088} height={500} />
      </CardFooter>
    </Card>
  );
};
