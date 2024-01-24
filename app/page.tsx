import Image from "next/image";
import { FC } from "react";

interface TileProps {
  image: string;
  title: string;
  link: string;
  width: number;
  height?: number;
}

const data: TileProps[] = [
  {
    title: "Github",
    image: "/github.svg",
    link: "https://github.com/ParzivalEugene",
    width: 98,
    height: 96,
  },
  {
    title: "Gitlab",
    image: "/gitlab-cropped.svg",
    link: "https://gitlab.com/ParzivalEugene",
    width: 380,
  },
  {
    title: "Codewars",
    image: "/codewars.png",
    link: "https://www.codewars.com/users/ParzivalEugene",
    width: 256,
  },
  {
    title: "Leetcode",
    image: "/leetcode.svg",
    link: "https://leetcode.com/ParzivalEugene/",
    width: 288,
  },
  {
    title: "Telegram",
    image: "/telegram.png",
    link: "https://t.me/parzival_eugene",
    width: 512,
  },
];

const Tile: FC<TileProps> = ({ image, title, link, width, height }) => {
  return (
    <a
      href={link}
      className="relative flex flex-col rounded-lg border-2 border-transparent dark:border-zinc-700 dark:bg-zinc-950 p-4 transition-all
      duration-300 ease-in-out hover:-translate-y-2 dark:hover:border-slate-400 dark:hover:shadow-2xl dark:hover:shadow-slate-500 lg:aspect-square lg:items-center lg:justify-between lg:rounded-3xl lg:p-12"
    >
      <Image
        src={image}
        alt={title}
        width={width}
        height={height || width}
        className="absolute top-1/2 w-8 -translate-y-1/2 lg:relative lg:top-0 lg:w-2/3 lg:transform-none "
      />
      <p className="text-center text-xl font-semibold dark:text-white">
        {title}
      </p>
    </a>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 pb-8 lg:p-24 lg:px-48">
      <nav className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
        <h1 className="text-4xl font-bold dark:text-white">
          Michkov Eugene | Links
        </h1>
        <a
          href="https://portfolio.michkoff.com"
          className="group w-full rounded-lg border-transparent  bg-gradient-to-r 
          from-indigo-600 to-fuchsia-600 p-[2px] text-center text-xl transition-colors duration-300 ease-in-out 
          hover:from-indigo-600 hover:to-fuchsia-600 lg:w-auto lg:from-indigo-600/60 lg:to-fuchsia-600/60 dark:text-white"
        >
          <div className="rounded-lg bg-zinc-950 p-4">
            Check out my Portfolio{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </div>
        </a>
      </nav>
      <section className="flex w-full flex-col gap-4 lg:grid lg:grid-cols-5 lg:gap-10 lg:px-16">
        {data.map((item, i) => (
          <Tile key={i} {...item} />
        ))}
      </section>
      <footer className="flex w-full flex-col items-center justify-between gap-2 lg:flex-row lg:items-end lg:gap-0">
        <p className="group flex items-baseline gap-2 rounded-lg text-center text-xl lg:border-2 lg:border-transparent lg:border-zinc-700 lg:bg-zinc-950 lg:p-6 dark:text-white">
          Coded with{" "}
          <Image
            width={394}
            height={80}
            src={"/next.svg"}
            alt="Next js"
            className="h-3.5 invert w-fit"
          />
        </p>
        <p className="mb-2 flex text-center text-xl dark:text-white">
          © 2023 Michkov Eugene. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
