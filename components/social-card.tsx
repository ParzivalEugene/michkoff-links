import { cn } from "@/lib/utils";
import { headers } from "next/headers";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { buttonVariants } from "./ui/button";
import { CardDescription, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface SocialCardProps {
  icon: StaticImageData;
  description?: string[];
  descriptionUrl?: string;
  items?: Number;
  title: string;
  link: string;
  className?: string;
}

export const SocialCard = async ({
  link,
  icon,
  description,
  descriptionUrl,
  items,
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
      
      {description ? (
        <div className="px-4 lg:pb-2 lg:px-6 flex flex-col items-start">
          {description.map((text, key) => (
            <CardDescription key={key} className="w-fit text-start">
              {text}
            </CardDescription>
          ))}
        </div>
      ) : descriptionUrl && items ? (
        <Suspense fallback={<SocialCardDescriptionSkeleton items={items} />}>
          <SocialCardDescription descriptionUrl={descriptionUrl} />
        </Suspense>
      ) : null}

      <CardFooter className="absolute bottom-0 p-4 lg:p-6">{title}</CardFooter>
    </Link>
  );
};

const SocialCardDescription = async ({
  descriptionUrl,
}: {
  descriptionUrl: string;
}) => {
  const domain = headers().get("x-forwarded-host");
  const data: { [key: string]: string } = await fetch(
    `http://${domain}/api/${descriptionUrl}`
  ).then((res) => res.json());
  return (
    <div className="px-4 lg:pb-2 lg:px-6 flex flex-col items-start">
      {Object.entries(data).map(([key, value], index) => (
        <CardDescription key={index} className="w-fit text-start">
          {value} {key}
        </CardDescription>
      ))}
    </div>
  );
};

const SocialCardDescriptionSkeleton = ({ items }: { items: Number }) => {
  return (
    <div className="px-4 lg:pb-2 lg:px-6 flex flex-col items-start">
      {Array(items)
        .fill(0)
        .map((_, key) => (
          <Skeleton key={key} className="w-24 h-4 mb-2 rounded-xl" />
        ))}
    </div>
  );
};
