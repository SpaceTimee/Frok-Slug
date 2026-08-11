import {
  BugIcon,
  HeartHandshakeIcon,
  Mail,
  MonitorIcon,
  MoonIcon,
  SettingsIcon,
  SproutIcon,
  SunIcon,
  TelescopeIcon,
} from "lucide-react";
import { GithubLogo } from "@/components/icons/logos";

export const Pages = [
  {
    name: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  }
];

export const ChangeTheme = [
  {
    name: "Light Theme",
    param: "light",
    icon: SunIcon,
  },
  {
    name: "Dark Theme",
    param: "dark",
    icon: MoonIcon,
  },
  {
    name: "System Theme",
    param: "system",
    icon: MonitorIcon,
  },
];

export const DocumentationPages = [
  {
    name: "Getting Started",
    href: "https://github.com/SpaceTimee/Frok-Slug?tab=readme-ov-file#-getting-started",
    icon: SproutIcon,
  },
  {
    name: "Roadmap",
    href: "https://github.com/SpaceTimee/Frok-Slug?tab=readme-ov-file#-roadmap",
    icon: TelescopeIcon,
  },
  {
    name: "Contributing",
    href: "https://github.com/SpaceTimee/Frok-Slug?tab=readme-ov-file#%EF%B8%8F-contributing",
    icon: HeartHandshakeIcon,
  },
  {
    name: "Report a Bug",
    href: "https://github.com/SpaceTimee/Frok-Slug/issues/new/choose",
    icon: BugIcon,
  }
];

export const SocialPages = [
  {
    name: "Contact",
    href: "mailto:Zeus6_6@163.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/SpaceTimee/Frok-Slug",
    icon: GithubLogo,
  },
];
