import { cn } from "@/lib/utils";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";

export const ResumeCard = async () => {
  return (
    <Link
      href="https://michkoff.com/resume-michkov-evgeny.pdf"
      download
      className={cn(
        buttonVariants({ variant: "outline" }),
        "rounded-3xl relative flex flex-col h-auto items-start justify-start p-0 whitespace-normal transition-all ease duration-300 hover:shadow-2xl min-h-[156px] hover:bg-[#140C0C] hover:shadow-[#E24329]/40 resume"
      )}
    >
      <CardHeader className="p-4 lg:p-6 lg:pb-3">
        <Card className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
          <FileTextIcon className="w-5 h-5" />
        </Card>
      </CardHeader>
      <div className="px-4 lg:pb-2 lg:px-6 flex flex-col items-start">
        <CardDescription className="w-fit text-start">
          Helios CTO<br />
          2+ years of work
        </CardDescription>
      </div>
      <CardFooter className="absolute bottom-0 p-4 lg:p-6">Resume</CardFooter>
    </Link>
  );
};
