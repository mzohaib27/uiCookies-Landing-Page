import { TfiMobile, TfiWallet } from "react-icons/tfi";
import { GoLightBulb } from "react-icons/go";
import { ImCheckmark } from "react-icons/im";
import img1 from "../assets/img_showcase_1.jpg";
import img2 from "../assets/img_showcase_2.jpg";
import person1 from "../assets/person_1.jpg";
import person2 from "../assets/person_2.jpg";
import person3 from "../assets/person_3.jpg";
import { IoStarSharp } from "react-icons/io5";

export const cardsData = [
  {
    id: 1,
    icon: <TfiMobile />,
    title: "Mobile Optimize",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 2,
    icon: <TfiWallet />,
    title: "Increase Revenue",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 1,
    icon: <GoLightBulb />,
    title: "Smart Idea",
    text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
];

export const featureHeader = {
  title: "Features",
  text: `
  Even the all-powerful Pointing has no control about the blind texts
  it is an almost unorthographic life One day however a small line of
  blind text by the name of Lorem Ipsum decided to leave for the far
  World of Grammar.
  `,
  isLine: true,
};
export const featureSection = [
  {
    id: 1,
    img: img1,
    title: "Big Benefits for Small Business",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    list: [
      {
        id: 1,
        icon: <ImCheckmark />,
        text: "Pointing has no control",
      },
      {
        id: 2,
        icon: <ImCheckmark />,
        text: "A small river named Duden flows",
      },
      {
        id: 3,
        icon: <ImCheckmark />,
        text: "Roasted parts of sentences fly into your mouth",
      },
    ],
  },
  {
    id: 2,
    isPresent: true,
    img: img2,
    title: "How Frame is Different",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    list: [
      {
        id: 1,
        icon: <ImCheckmark />,
        text: "Pointing has no control",
      },
      {
        id: 2,
        icon: <ImCheckmark />,
        text: "A small river named Duden flows",
      },
      {
        id: 3,
        icon: <ImCheckmark />,
        text: "Roasted parts of sentences fly into your mouth",
      },
    ],
  },
  {
    id: 3,
    img: img1,
    title: "All in One Place",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    list: [
      {
        id: 1,
        icon: <ImCheckmark />,
        text: "Pointing has no control",
      },
      {
        id: 2,
        icon: <ImCheckmark />,
        text: "A small river named Duden flows",
      },
      {
        id: 3,
        icon: <ImCheckmark />,
        text: "Roasted parts of sentences fly into your mouth",
      },
    ],
  },
];

export const pricingHeader = {
  title: "Choose the plan that’s right for your business",
  text: `
  Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
  `,
  isLine: true,
};

export const pricingCardsData = [
  {
    topHeader: "STARTER",
    price: "$22.99",
    list: [
      {
        id: 1,
        icon: <ImCheckmark />,
        text: "Pointing has no control",
      },
      {
        id: 2,
        icon: <ImCheckmark />,
        text: "A small river named Duden flows",
      },
      {
        id: 3,
        icon: <ImCheckmark />,
        text: "Roasted parts of sentences fly into your mouth",
      },
    ],
  },
  {
    topHeader: "BUSINESS",
    price: "$69.99",
    list: [
      {
        id: 1,
        icon: <ImCheckmark />,
        text: "Pointing has no control",
      },
      {
        id: 2,
        icon: <ImCheckmark />,
        text: "A small river named Duden flows",
      },
      {
        id: 3,
        icon: <ImCheckmark />,
        text: "Roasted parts of sentences fly into your mouth",
      },
    ],
    isBlue: true,
  },
  {
    topHeader: "PREMIUM",
    price: "$224.99",
    list: [
      {
        id: 1,
        icon: <ImCheckmark />,
        text: "Pointing has no control",
      },
      {
        id: 2,
        icon: <ImCheckmark />,
        text: "A small river named Duden flows",
      },
      {
        id: 3,
        icon: <ImCheckmark />,
        text: "Roasted parts of sentences fly into your mouth",
      },
    ],
  },
];

export const TestimonialHeader = {
  title: "That’s why 100,000+ Love Frame",
  text: `
  Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
  `,
  isLine: true,
};

export const TestimonialCards = [
  {
    id: 1,
    img: person1,
    stars: [
      {
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
      },
    ],
    text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    name: "--Garry Alexander",
  },
  {
    id: 2,
    img: person2,
    stars: [
      {
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
      },
    ],
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    name: "--James Robertson",
  },
  {
    id: 3,
    img: person3,
    stars: [
      {
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
      },
    ],
    text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    name: "--Ben Goodrich",
  },
  {
    id: 4,
    img: person1,
    stars: [
      {
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
      },
    ],
    text: "And if she hasn’t been rewritten, then they are still using her.",
    name: "--Kip Hugh",
  },
  {
    id: 5,
    img: person2,
    stars: [
      {
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
      },
    ],
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    name: "--James Robertson",
  },
  {
    id: 6,
    img: person3,
    stars: [
      {
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
        star: <IoStarSharp />,
      },
    ],
    text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    name: "--Ben Goodrich",
  },
];

export const FAQHeader = {
  title: "Try it Today",
  text: `
  Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
  `,
  isButton: true,
  isLine: true,
};

export const FAQSection = [
  {
    id: 1,
    icon: <ImCheckmark />,
    heading: "What is Instant?",
    text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.    ",
  },
  {
    id: 2,
    icon: <ImCheckmark />,
    heading: "Is this available to my country?",
    text: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.",
  },
  {
    id: 3,
    icon: <ImCheckmark />,
    heading: "How do I use the new features of Frame App?",
    text: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word 'and' and the Little Blind Text should turn around and return to its own, safe country",
  },
  {
    id: 4,
    icon: <ImCheckmark />,
    heading: "I have technical problem who do I email?",
    text: "But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.",
  },
];

export const contactHeader = {
  title: "Join With Over 100K Members",
  text: "But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.",
  isButton: true,
};
