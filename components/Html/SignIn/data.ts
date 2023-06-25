import {
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
  TwiiterIcon,
} from "./Icons/Icons";

type ButtonData = {
  name: string;
  provider: string;
  Icon: () => JSX.Element;
};

export const buttonData: ButtonData[] = [
  {
    name: "Google",
    provider: "google",
    Icon: GoogleIcon,
  },
  {
    name: "Facebook",
    provider: "facebook",
    Icon: FacebookIcon,
  },
  {
    name: "Twitter",
    provider: "twitter",
    Icon: TwiiterIcon,
  },
  {
    name: "GitHub",
    provider: "github",
    Icon: GithubIcon,
  },
];
