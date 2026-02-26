import {
  HomeIcon,
  Globe,
  Building2,
  ShoppingCart,
  HelpCircle,
  AlertTriangle,
  ListOrdered,
  Star,
} from "lucide-react";

import { BsQuestion } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { PiStepsFill } from "react-icons/pi";
import { MdWorkspacesFilled } from "react-icons/md";
import { RiGuideFill } from "react-icons/ri";

export const iconMap = {
  // lucide
  HomeIcon,
  Globe,
  Building2,
  ShoppingCart,
  HelpCircle,
  AlertTriangle,
  ListOrdered,
  Star,

  // react-icons
  BsQuestion,
  BiSolidHome,
  PiStepsFill,
  MdWorkspacesFilled,
  RiGuideFill,
};

export type IconName = keyof typeof iconMap;
