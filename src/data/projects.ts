import CommandoImage from "@/assets/commando.png";
import ConsoleImage from "@/assets/console.png";
import SashImage from "@/assets/code.png";
import TimerImage from "@/assets/timer.png";
import ViteExpressImage from "@/assets/vite-express.png";
import KernelImage from "@/assets/kernel.png";
import FriendshipImage from "@/assets/friendship.png";
import MultipartImage from "@/assets/multipart.png";

import type { Project } from "ts/Project";

export const PROJECTS: Project[] = [
  {
    emoji: "⚡",
    title: "Vite Express",
    href: "https://github.com/szymmis/vite-express",
    image: ViteExpressImage,
    stars: "340+",
    description:
      "My biggest pride, an open-source library that let's you easily integrate your express server with Vite frontend. With almost 200k downloads on NPM and 400+ GitHub stars, it simplifies setups for demos, proofs of concept, and learning projects. It helped me understand internals of express and how middleware work, as well as how Vite serves files and how HMR works.",
    techs: ["typescript", "express"],
  },
  {
    emoji: "⚙️",
    title: "Multipart Parser",
    href: "https://github.com/szymmis/multipart",
    image: MultipartImage,
    description:
      "I was doing a little demo app that was supposed to take a file input from the user, process it, then send back. As I needed a library for parsing form data I stumbled upon multer but it was too big for my app, and there was a lack of something small. I like learning by creating, so I've decided to make a middleware that will be able to parse that form data. That's how this project was born and I've learned so much cool ideas in the process.",
    techs: ["typescript", "express"],
  },
  {
    emoji: "👾",
    title: "Space Kernel",
    href: "https://github.com/szymmis/space-kernel",
    image: KernelImage,
    description:
      "This project holds a special place for me — it's written in Rust, which is a big deal these days. Beyond the trend, working on it taught me essential low-level concepts. I delved into understanding memory allocations, the distinctions between stack and heap, the true nature of pointers, and what it even means to allocate on the heap. These are aspects often taken for granted in high-level languages. This journey has been a fascinating adventure!",
    techs: ["rust"],
  },
  {
    emoji: "😌",
    title: "Sane Shell",
    href: "https://github.com/szymmis/sash",
    image: SashImage,
    description:
      "Written in Rust, this is my first substantial project using the language. There's something about grasping Rust concepts that empowers you to tackle projects you wouldn't have considered before. That's how I found myself building a language parser—envisioned as a Bash replacement, it's more of a concept with potential. Not having enough time to work on, prevents me from pushing it further, but sometimes it's not about completing the project; it's about embracing the learning journey.",
    techs: ["rust"],
  },
  {
    emoji: "🛠️",
    title: "Setup.sh",
    href: "https://github.com/szymmis/setup.sh",
    image: ConsoleImage,
    description:
      "If you've hopped between distros, you know the struggle of setting up everything from scratch each time. For me, it was the pain of configuring ZSH with scripts and plugins and the Node environment. After multiple system reinstalls in a week I've decided to create a script to automate it. I have then seen how bad it is to work with Bash or shell scripting. That's how I've came up with Sane Shell idea.",
    techs: ["shell"],
  },
  {
    emoji: "⏱️",
    title: "Coding Timer",
    image: TimerImage,
    href: "https://github.com/szymmis/coding-timer",
    description:
      "This is a silly one. Once, I've been wondering myself how much time do I spend typing when I'm working. To find out I decided to create an extension for VSCode. That way I was able to answer my question and also learn how to create an extension for my favourite editor, and what the posibilities are. It isn't of much use but it nice to be able to write an extension.",
    techs: ["typescript"],
  },
  {
    emoji: "🐔",
    title: "EasyGifts",
    href: "https://github.com/szymmis/EasyGifts",
    image: FriendshipImage,
    description:
      "There's nothing like unwinding with a peaceful game of planting and harvesting parsnips. If you're familiar with the game, you know the grind to max out friendship levels with villagers is real. Constantly checking wikis for their preferences felt tedious, so I've created a modification that shows you the info about what people like. This project is an interesting one, because I've had to do a lot of reverse engineering to get stuff done. That's the best way to learn how to read and understand the code.",
    techs: ["csharp"],
  },
  {
    emoji: "🎮",
    title: "Commando.js",
    href: "https://github.com/szymmis/commando.js",
    image: CommandoImage,
    description:
      "Even though it's my first substantial JavaScript project with what I consider pretty crappy code, I'm still proud of it and often find myself going back to play a bit. You can even try it online with one playable level. It's a JavaScript port of a Commodore64 game called Commando, originally created for a high school project. I've gotten pretty good grade on this one, so maybe it isn't that bad after all?",
    techs: ["javascript"],
  },
];
