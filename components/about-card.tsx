import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FacePic from "@/public/eblo.jpg";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

const data = [
  { icon: "/logos/t3.png", link: "T3 stack" },
  { icon: "/logos/vercel.png", link: "Vercel" },
  { icon: "/logos/prisma.png", link: "Prisma" },
  { icon: "/logos/ts.png", link: "TypeScript" },
];

export const AboutCard = () => {
  return (
    <Card className="rounded-3xl about relative">
      <CardHeader className="gap-2 lg:gap-8 p-4 lg:p-6">
        <Image
          src={FacePic}
          alt="Eugene"
          className="rounded-xl"
          placeholder="blur"
        />
        <Badge className="text-xs px-0 flex justify-center py-1 rounded-xl">
          Fullstack developer
        </Badge>
      </CardHeader>
      <CardContent className="absolute bottom-0 p-4 lg:p-6">
        <div className="w-[128px] h-[128px] lg:w-[132px] lg:h-[132px] grid grid-rows-2 grid-cols-2 lg:gap-6 gap-4">
          {data.map((value, key) => (
            <TooltipProvider key={key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={value.icon}
                    alt="icon"
                    width={600}
                    height={600}
                    className="rounded-xl cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>{value.link}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
