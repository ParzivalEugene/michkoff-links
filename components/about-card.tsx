import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

const icons = [
  "/logos/t3.png",
  "/logos/vercel.png",
  "/logos/prisma.svg",
  "/logos/ts.png",
];

export const AboutCard = () => {
  return (
    <Card className="rounded-3xl row-span-2 relative">
      <CardHeader className="gap-8">
        <Image
          src="/eblo.jpg"
          alt="Eugene"
          width={854}
          height={854}
          className="rounded-xl"
        />
        <Badge className="text-xs px-0 flex justify-center py-1 rounded-xl">
          Frontend developer
        </Badge>
      </CardHeader>
      <CardContent className="absolute bottom-0">
        <div className=" w-[132px] h-[132px] grid grid-rows-2 grid-cols-2 gap-6">
          {icons.map((icon, key) => (
            <Image
              key={key}
              src={icon}
              alt="icon"
              width={60}
              height={60}
              className="rounded-xl"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
