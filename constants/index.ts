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
  { name: "Contact Us", href: "#", current: false },
];

export const heroCards = [
  {
    name: "Adjustable Parameters",
    description:
      "With hundreds of parameters, you can adjust the model to your needs. We also have presets for common use cases.",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: "Project Integration",
    description:
      "Esaily integrate the model into your project with our API like React, Next, Vue, and Svelte. {Coming Soon!}",
    icon: CodeBracketIcon,
  },
  {
    name: "Always Improving",
    description:
      "Our team is always working to improve the model and add new features.",
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
