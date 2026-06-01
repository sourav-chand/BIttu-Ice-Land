export interface Flavor {
  name: string;
  price: number;
  description: string;
  gradient: string;
  emoji: string;
}

export const flavors: Flavor[] = [
  {
    name: "Mango Magic",
    price: 30,
    description: "Real Alphonso mango pulp blended into creamy perfection",
    gradient: "from-amber-400 to-orange-500",
    emoji: "🥭",
  },
  {
    name: "Chocolate Bliss",
    price: 35,
    description: "Rich Belgian chocolate with fudge swirls in every bite",
    gradient: "from-amber-900 to-stone-800",
    emoji: "🍫",
  },
  {
    name: "Strawberry Dream",
    price: 30,
    description: "Fresh strawberry puree swirled into silky cream",
    gradient: "from-pink-400 to-rose-500",
    emoji: "🍓",
  },
  {
    name: "Pista Delight",
    price: 40,
    description: "Premium pistachio with crunchy nut bits",
    gradient: "from-emerald-400 to-teal-600",
    emoji: "🫒",
  },
  {
    name: "Vanilla Classic",
    price: 25,
    description: "Madagascar vanilla bean — timeless and true",
    gradient: "from-stone-200 to-amber-200",
    emoji: "🍦",
  },
  {
    name: "Butterscotch Crunch",
    price: 35,
    description: "Caramel butterscotch with crispy praline pieces",
    gradient: "from-amber-500 to-yellow-700",
    emoji: "🍯",
  },
  {
    name: "Kulfi Special",
    price: 20,
    description: "Traditional Indian kulfi — cardamom & saffron infused",
    gradient: "from-rose-300 to-pink-600",
    emoji: "🇮🇳",
  },
  {
    name: "Mixed Fruit",
    price: 35,
    description: "Tropical medley of seasonal fruits in creamy base",
    gradient: "from-lime-400 to-emerald-500",
    emoji: "🍇",
  },
  {
    name: "Black Currant",
    price: 40,
    description: "Tangy black currant with a vibrant purple hue",
    gradient: "from-violet-500 to-purple-800",
    emoji: "🫐",
  },
  {
    name: "Rose Petal",
    price: 30,
    description: "Delicate rose infusion with real petal pieces",
    gradient: "from-pink-300 to-fuchsia-600",
    emoji: "🌹",
  },
];
