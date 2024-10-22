import { cn } from "@/lib/utils";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const PortfolioCard = () => {
  return (
    <Link
      href={"https://michkoff.com"}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "h-auto items-start justify-start whitespace-normal text-start flex flex-col rounded-3xl relative portfolio p-0 hover:bg-[#0E0F16] hover:shadow-2xl hover:shadow-[#677EEB]/40 transition-all ease duration-300"
      )}
    >
      <CardHeader className="p-4 lg:p-6">
        <Card className="w-[40px] h-[40px] rounded-xl">
          <svg
            width="16"
            height="16"
            className="h-full w-full p-2.5"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.95034 13.8492C5.12191 15.0208 7.02141 15.0208 8.19298 13.8492L9.6072 12.435C9.99772 12.0445 10.6309 12.0445 11.0214 12.435C11.4119 12.8256 11.4119 13.4587 11.0214 13.8492L9.6072 15.2635C7.65457 17.2161 4.48875 17.2161 2.53613 15.2635C0.583506 13.3108 0.583507 10.145 2.53613 8.19239L3.95034 6.77817C4.34087 6.38765 4.97403 6.38765 5.36455 6.77817C5.75508 7.1687 5.75508 7.80186 5.36455 8.19239L3.95034 9.6066C2.77877 10.7782 2.77877 12.6777 3.95034 13.8492ZM12.4356 9.6066L13.8498 8.19239C15.0214 7.02082 15.0214 5.12132 13.8498 3.94975C12.6783 2.77817 10.7788 2.77817 9.6072 3.94975L8.19298 5.36396C7.80246 5.75449 7.16929 5.75449 6.77877 5.36396C6.38824 4.97344 6.38824 4.34027 6.77877 3.94975L8.19298 2.53553C10.1456 0.582913 13.3114 0.582913 15.264 2.53553C17.2167 4.48816 17.2167 7.65398 15.264 9.6066L13.8498 11.0208C13.4593 11.4113 12.8261 11.4113 12.4356 11.0208C12.0451 10.6303 12.0451 9.99713 12.4356 9.6066ZM11.7285 7.48528C12.119 7.09476 12.119 6.46159 11.7285 6.07107C11.338 5.68054 10.7048 5.68054 10.3143 6.07107L6.07166 10.3137C5.68114 10.7042 5.68114 11.3374 6.07166 11.7279C6.46219 12.1184 7.09535 12.1184 7.48588 11.7279L11.7285 7.48528Z"
              fill="currentColor"
            ></path>
          </svg>
        </Card>
      </CardHeader>
      <CardContent className="px-4 lg:px-6 pb-2">
        <CardTitle className="text-xl lg:text-2xl ">
          Michkov Eugene | Portfolio
        </CardTitle>
        <CardDescription>michkoff.com</CardDescription>
      </CardContent>
      <CardFooter className="absolute bottom-0 flex-col items-start gap-4 lg:gap-6 p-4 lg:p-6">
        <Badge>Version v2.0 is out! 🎉 </Badge>
        <Image src={Logo} alt="EM" />
      </CardFooter>
    </Link>
  );
};
