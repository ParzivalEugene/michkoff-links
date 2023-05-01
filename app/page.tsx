import { Raleway } from "next/font/google";
import { FC } from "react";

const raleway = Raleway({ subsets: ["latin"] });

interface TileProps {
  image: string;
  title: string;
  link: string;
}

const data = [
  {
    title: "Github",
    image: "/github.svg",
    link: "https://github.com/ParzivalEugene",
  },
  {
    title: "Gitlab",
    image: "/gitlab-cropped.svg",
    link: "https://gitlab.com/ParzivalEugene",
  },
  {
    title: "Codewars",
    image: "/codewars.png",
    link: "https://www.codewars.com/users/ParzivalEugene",
  },
  {
    title: "Leetcode",
    image: "/leetcode.svg",
    link: "https://leetcode.com/ParzivalEugene/",
  },
  {
    title: "Telegram",
    image: "/telegram.png",
    link: "https://t.me/parzival_eugene",
  },
];

const Tile: FC<TileProps> = ({ image, title, link }) => {
  return (
    <a
      href={link}
      className="flex aspect-square flex-col items-center justify-between rounded-3xl border-2 border-transparent border-zinc-700 bg-neutral-800/30 p-12 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-500"
    >
      <img src={image} alt={title} className="w-2/3" />
      <p className="text-center text-xl font-semibold">{title}</p>
    </a>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 px-48">
      <nav className="flex w-full items-center justify-between">
        <h1 className="text-4xl font-bold">Michkov Eugene | Links</h1>
        <a
          href="https://michkoff.com"
          className="group rounded-lg border-2 border-transparent border-zinc-700 bg-neutral-800/30 p-4 text-xl transition-all duration-300 ease-in-out hover:border-slate-400 hover:shadow-lg hover:shadow-slate-500"
        >
          Check out my Portfolio{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </a>
      </nav>
      <section className="grid w-full grid-cols-5 gap-10 px-16">
        {data.map((item, i) => (
          <Tile
            key={i}
            title={item.title}
            image={item.image}
            link={item.link}
          />
        ))}
      </section>
      <footer className="flex w-full items-end justify-between">
        <p className="group flex items-baseline gap-2 rounded-lg border-2 border-transparent border-zinc-700 bg-neutral-800/30 p-6 text-center text-xl">
          Coded with{" "}
          <img src={"/next.svg"} alt="Next js" className="h-3.5 invert" />
        </p>
        <p className="mb-2 flex text-center text-xl">
          © 2023 Michkov Eugene. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
