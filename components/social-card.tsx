import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CardDescription, CardFooter, CardHeader } from "./ui/card";

interface SocialCardProps {
  icon: StaticImageData;
  description: string[];
  title: string;
  link: string;
  className?: string;
}

export const SocialCard = async ({
  link,
  icon,
  description,
  title,
  className,
}: SocialCardProps) => {

  return (
    <Link
      href={link}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "rounded-3xl relative flex flex-col h-auto items-start justify-start p-0 whitespace-normal transition-all ease duration-300 hover:shadow-2xl min-h-[156px]",
        className
      )}
    >
      <CardHeader className="p-4 lg:p-6 lg:pb-3">
        <Image
          src={icon}
          alt="icon"
          width={400}
          height={400}
          className="w-[40px] h-[40px] rounded-xl"
        />
      </CardHeader>

      <div className="px-4 lg:pb-2 lg:px-6 flex flex-col items-start">
        {description.map((text, key) => (
          <CardDescription key={key} className="w-fit text-start">
            {text}
          </CardDescription>
        ))}
      </div>

      <CardFooter className="absolute bottom-0 p-4 lg:p-6">{title}</CardFooter>
    </Link>
  );
};
