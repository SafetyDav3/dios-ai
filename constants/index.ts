// For heroCards
import {
  CodeBracketIcon,
  BeakerIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/20/solid";

export const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Compute Credits", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

export const heroCards = [
  {
    name: "Adjustable Parameters",
    description:
      "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: "Project Integration",
    description:
      "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    icon: CodeBracketIcon,
  },
  {
    name: "Always Improving",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    icon: BeakerIcon,
  },
];

export const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};
