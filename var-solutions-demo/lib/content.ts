// All business content for the site lives here so it can be swapped for future clients.

export const business = {
  name: "VAR Solutions Ltd",
  shortName: "VAR Solutions",
  wordmark: "VAR",
  tagline: "Mobile Smart Repairs",
  region: "South Wales",
  phoneDisplay: "07741 891293",
  phoneE164: "+447741891293",
  phoneHref: "tel:+447741891293",
  whatsappHref: "https://wa.me/447741891293",
  whatsappNumber: "447741891293",
  whatsappHeroHref:
    "https://wa.me/447741891293?text=Hi%20VAR%20Solutions%2C%20I'd%20like%20a%20quote.%20I'll%20send%20a%20photo%20of%20the%20damage.",
};

export const site = {
  title: "VAR Solutions | Mobile Smart Repairs South Wales",
  description:
    "Mobile car scratch, dent, bumper and alloy wheel repairs at your home or work. Covering Cardiff, Newport, Bridgend, Swansea and the Heads of the Valleys.",
};

export const agency = {
  name: "JM Digital Marketing",
  href: "https://wa.me/923130709941?text=Hi%20JM%20Digital%20Marketing%2C%20I%20saw%20your%20demo%20page%20and%20I%27d%20like%20a%20website.",
};

// Swap for "/before.jpg" and "/after.jpg" once real photos are in /public.
export const images = {
  before: {
    src: "https://images.pexels.com/photos/33749906/pexels-photo-33749906.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Car bumper with scuffs and scratched paint before repair",
  },
  after: {
    src: "https://images.pexels.com/photos/6872572/pexels-photo-6872572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Glossy car paintwork being polished after a smart repair",
  },
};

export const areas = [
  "Cardiff",
  "Newport",
  "Bridgend",
  "Swansea",
  "Heads of the Valleys",
] as const;

export const tickerItems = [...areas, "South Wales"];

// Rough map positions (percent of the box) for the Areas panel.
export const areaMapPoints = [
  { name: "Swansea", left: 28, top: 62 },
  { name: "Bridgend", left: 46, top: 72 },
  { name: "Cardiff", left: 64, top: 80 },
  { name: "Newport", left: 78, top: 66 },
  { name: "Heads of the Valleys", left: 58, top: 46 },
];

export const heroTrust = ["Fully mobile", "Free photo quotes", "Most jobs same day"];

export const heroSteps = [
  "Send us a photo on WhatsApp",
  "Get a fixed price, no surprises",
  "We repair it on your driveway",
];

export type ServiceIcon = "scratch" | "dent" | "bumper" | "alloy" | "chips" | "paint";

export const services: { title: string; text: string; icon: ServiceIcon }[] = [
  {
    title: "Scratch Repair",
    text: "Key scratches, paint scrapes and scuffs blended back to match your original colour.",
    icon: "scratch",
  },
  {
    title: "Dent Removal",
    text: "Car park dings and door dents pulled out, often without needing any paint.",
    icon: "dent",
  },
  {
    title: "Bumper Scuffs",
    text: "Scraped corners and cracked bumpers repaired and resprayed on the spot.",
    icon: "bumper",
  },
  {
    title: "Alloy Wheel Refurb",
    text: "Kerbed and scuffed alloys smoothed, painted and lacquered to look like new.",
    icon: "alloy",
  },
  {
    title: "Stone Chips",
    text: "Bonnet and panel chips filled before they turn into rust.",
    icon: "chips",
  },
  {
    title: "Paint Touch-Ups",
    text: "Colour-matched spot repairs for lease returns, sales and peace of mind.",
    icon: "paint",
  },
];

export const reasons = [
  {
    title: "We come to you",
    text: "Home, work or anywhere safe to park. Our van carries everything we need.",
  },
  {
    title: "Fixed prices",
    text: "Send a photo, get a clear price before we start. No hidden extras.",
  },
  {
    title: "Save money",
    text: "Repairing just the damaged area costs far less than a full panel respray.",
  },
  {
    title: "Lease return ready",
    text: "Avoid end-of-lease damage charges with a quick repair beforehand.",
  },
];

// Placeholders only. Replace with real, word-for-word customer reviews before launch.
export const reviews = [
  {
    quote: "Your best Google or Facebook review goes here, word for word.",
    name: "Customer name",
    town: "Cardiff",
  },
  {
    quote: "A second real review, ideally about a bumper or dent repair.",
    name: "Customer name",
    town: "Newport",
  },
  {
    quote: "A third real review, ideally mentioning the mobile service.",
    name: "Customer name",
    town: "Swansea",
  },
];

export const quoteTowns = [...areas, "Other South Wales"];

export const quoteRepairs = [
  "Scratch",
  "Dent",
  "Bumper scuff",
  "Alloy wheel",
  "Stone chips",
  "Something else",
];

export const faqs = [
  {
    q: "Do I need to bring my car anywhere?",
    a: "No. We're fully mobile and repair your car at your home or workplace, as long as there's safe space to work.",
  },
  {
    q: "How long does a repair take?",
    a: "Most scratch, scuff and dent repairs are finished in a few hours, so your car is ready the same day.",
  },
  {
    q: "Will the colour match?",
    a: "We colour-match to your car's paint code and blend the repair so it sits naturally with the surrounding paint.",
  },
  {
    q: "How do I get a price?",
    a: "WhatsApp a couple of photos of the damage to 07741 891293 and we'll reply with a fixed price.",
  },
  {
    q: "What if it rains?",
    a: "Paint work needs dry conditions, so if the weather turns we'll rearrange at a time that suits you.",
  },
];
