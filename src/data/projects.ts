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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo dolor, tincidunt ut pulvinar bibendum, sodales at ipsum. Sed lacinia sagittis dui, placerat hendrerit dolor commodo non. Mauris at bibendum urna. Nunc accumsan leo in magna dapibus scelerisque. Nam convallis, ante ut dignissim laoreet, enim ante euismod augue, eget varius ipsum tellus nec augue.",
    techs: ["typescript", "express"],
  },
  {
    emoji: "⚙️",
    title: "Multipart Parser",
    href: "https://github.com/szymmis/multipart",
    image: MultipartImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo dolor, tincidunt ut pulvinar bibendum, sodales at ipsum. Sed lacinia sagittis dui, placerat hendrerit dolor commodo non. Mauris at bibendum urna. Nunc accumsan leo in magna dapibus scelerisque. Nam convallis, ante ut dignissim laoreet, enim ante euismod augue, eget varius ipsum tellus nec augue.",
    techs: ["typescript", "express"],
  },
  {
    emoji: "👾",
    title: "Space Kernel",
    href: "https://github.com/szymmis/space-kernel",
    image: KernelImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo dolor, tincidunt ut pulvinar bibendum, sodales at ipsum. Sed lacinia sagittis dui, placerat hendrerit dolor commodo non. Mauris at bibendum urna. Nunc accumsan leo in magna dapibus scelerisque. Nam convallis, ante ut dignissim laoreet, enim ante euismod augue, eget varius ipsum tellus nec augue.",
    techs: ["rust"],
  },
  {
    emoji: "😌",
    title: "Sane Shell",
    href: "https://github.com/szymmis/sash",
    image: SashImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo dolor, tincidunt ut pulvinar bibendum, sodales at ipsum. Sed lacinia sagittis dui, placerat hendrerit dolor commodo non. Mauris at bibendum urna. Nunc accumsan leo in magna dapibus scelerisque. Nam convallis, ante ut dignissim laoreet, enim ante euismod augue, eget varius ipsum tellus nec augue.",
    techs: ["rust"],
  },
  {
    emoji: "🛠️",
    title: "Setup.sh",
    href: "https://github.com/szymmis/setup.sh",
    image: ConsoleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo dolor, tincidunt ut pulvinar bibendum, sodales at ipsum. Sed lacinia sagittis dui, placerat hendrerit dolor commodo non. Mauris at bibendum urna. Nunc accumsan leo in magna dapibus scelerisque. Nam convallis, ante ut dignissim laoreet, enim ante euismod augue, eget varius ipsum tellus nec augue.",
    techs: ["shell"],
  },
  {
    emoji: "⏱️",
    title: "Coding Timer",
    image: TimerImage,
    href: "https://github.com/szymmis/coding-timer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo dolor, tincidunt ut pulvinar bibendum, sodales at ipsum. Sed lacinia sagittis dui, placerat hendrerit dolor commodo non. Mauris at bibendum urna. Nunc accumsan leo in magna dapibus scelerisque. Nam convallis, ante ut dignissim laoreet, enim ante euismod augue, eget varius ipsum tellus nec augue.",
    techs: ["typescript"],
  },
  {
    emoji: "🐔",
    title: "EasyGifts",
    href: "https://github.com/szymmis/EasyGifts",
    image: FriendshipImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo dolor, tincidunt ut pulvinar bibendum, sodales at ipsum. Sed lacinia sagittis dui, placerat hendrerit dolor commodo non. Mauris at bibendum urna. Nunc accumsan leo in magna dapibus scelerisque. Nam convallis, ante ut dignissim laoreet, enim ante euismod augue, eget varius ipsum tellus nec augue.",
    techs: ["csharp"],
  },
  {
    emoji: "🎮",
    title: "Commando.js",
    href: "https://github.com/szymmis/commando.js",
    image: CommandoImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo dolor, tincidunt ut pulvinar bibendum, sodales at ipsum. Sed lacinia sagittis dui, placerat hendrerit dolor commodo non. Mauris at bibendum urna. Nunc accumsan leo in magna dapibus scelerisque. Nam convallis, ante ut dignissim laoreet, enim ante euismod augue, eget varius ipsum tellus nec augue.",
    techs: ["javascript"],
  },
];
