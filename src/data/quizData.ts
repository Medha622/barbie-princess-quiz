export type Princess = "alexa" | "blair" | "barbara" | "merliah" | "mariposa";

export interface QuizOption {
  id: Princess;
  text: string;
  image: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export const princessInfo = {
  alexa: {
    name: "Princess Alexa",
    subtitle: "Barbie and the Secret Door",
    description: "✨ Dreamy and kind, you bring sparkle wherever you go. Your magical spirit lights up every room!",
    colors: "lavender & pink 💜",
  },
  blair: {
    name: "Blair Willows",
    subtitle: "Barbie: Princess Charm School",
    description: "🎀 Elegant and graceful, you embody royal confidence. Your poise and kindness inspire everyone around you!",
    colors: "blue & silver 💙",
  },
  barbara: {
    name: "Barbara Millicent Roberts",
    subtitle: "Fashion Fairy Tale",
    description: "💄 Trendy, confident, and full of style. You set the trends and aren't afraid to stand out!",
    colors: "hot pink & gold 💗",
  },
  merliah: {
    name: "Merliah Summers",
    subtitle: "Mermaid Tale",
    description: "🌊 Bold and free-spirited, you shine with natural confidence. Adventure is your middle name!",
    colors: "coral & turquoise 🧡",
  },
  mariposa: {
    name: "Mariposa",
    subtitle: "Barbie: Mariposa",
    description: "🦋 Creative and caring, you see beauty in everything around you. Your artistic soul touches hearts!",
    colors: "rainbow pastels 🌈",
  },
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Pick a dress for the royal ball:",
    options: [
      { id: "alexa", text: "Lavender gown with sparkling gems ✨", image: "/images/q1a_dress_alexa.jpg" },
      { id: "blair", text: "Classy navy blue gown 👗", image: "/images/q1b_dress_blair.jpg" },
      { id: "barbara", text: "Pink sequin mini dress 💖", image: "/images/q1c_dress_barbara.jpg" },
      { id: "merliah", text: "Coral beach dress 🌺", image: "/images/q1d_dress_merliah.jpg" },
      { id: "mariposa", text: "Floral fairy-style dress 🌸", image: "/images/q1e_dress_mariposa.jpg" },
    ],
  },
  {
    id: 2,
    question: "Choose your shoes:",
    options: [
      { id: "alexa", text: "Crystal heels 👠", image: "/images/q2a_shoes_alexa.jpg" },
      { id: "blair", text: "Elegant nude pumps 👡", image: "/images/q2b_shoes_blair.jpg" },
      { id: "barbara", text: "Hot pink stilettos 💅", image: "/images/q2c_shoes_barbara.jpg" },
      { id: "merliah", text: "Shiny flip-flops 🩴", image: "/images/q2d_shoes_merliah.jpg" },
      { id: "mariposa", text: "Floral flats with butterfly wings 🦋", image: "/images/q2e_shoes_mariposa.jpg" },
    ],
  },
  {
    id: 3,
    question: "Pick your hairstyle:",
    options: [
      { id: "alexa", text: "Loose curls with glittery clips ✨", image: "/images/q3a_hair_alexa.jpg" },
      { id: "blair", text: "Perfect princess bun 👑", image: "/images/q3b_hair_blair.jpg" },
      { id: "barbara", text: "Straight and sleek 💁‍♀️", image: "/images/q3c_hair_barbara.jpg" },
      { id: "merliah", text: "Beach waves 🌊", image: "/images/q3d_hair_merliah.jpg" },
      { id: "mariposa", text: "Braided crown with flowers 🌼", image: "/images/q3e_hair_mariposa.jpg" },
    ],
  },
  {
    id: 4,
    question: "What jewelry do you love most?",
    options: [
      { id: "alexa", text: "Sparkly gemstone choker 💎", image: "/images/q4a_jewelry_alexa.jpg" },
      { id: "blair", text: "Elegant pearls 🤍", image: "/images/q4b_jewelry_blair.jpg" },
      { id: "barbara", text: "Gold statement earrings ✨", image: "/images/q4c_jewelry_barbara.jpg" },
      { id: "merliah", text: "Shell necklace 🐚", image: "/images/q4d_jewelry_merliah.jpg" },
      { id: "mariposa", text: "Crystal butterfly pendant 🦋", image: "/images/q4e_jewelry_mariposa.jpg" },
    ],
  },
  {
    id: 5,
    question: "Pick a bag to carry:",
    options: [
      { id: "alexa", text: "Glitter clutch 💫", image: "/images/q5a_bag_alexa.jpg" },
      { id: "blair", text: "Satin handbag 🎀", image: "/images/q5b_bag_blair.jpg" },
      { id: "barbara", text: "Designer tote 👜", image: "/images/q5c_bag_barbara.jpg" },
      { id: "merliah", text: "Surf backpack 🎒", image: "/images/q5d_bag_merliah.jpg" },
      { id: "mariposa", text: "Floral pouch 🌺", image: "/images/q5e_bag_mariposa.jpg" },
    ],
  },
  {
    id: 6,
    question: "Choose a makeup look:",
    options: [
      { id: "alexa", text: "Shimmery pastel eyeshadow 💕", image: "/images/q6a_makeup_alexa.jpg" },
      { id: "blair", text: "Natural tones 🌸", image: "/images/q6b_makeup_blair.jpg" },
      { id: "barbara", text: "Bold eyeliner and red lips 💄", image: "/images/q6c_makeup_barbara.jpg" },
      { id: "merliah", text: "Bronze glow ☀️", image: "/images/q6d_makeup_merliah.jpg" },
      { id: "mariposa", text: "Glitter and colorful eyeliner ✨", image: "/images/q6e_makeup_mariposa.jpg" },
    ],
  },
  {
    id: 7,
    question: "Pick your day-out outfit:",
    options: [
      { id: "alexa", text: "Flowing pastel dress", image: "/images/q7a_outfit_alexa.jpg" },
      { id: "blair", text: "Chic blazer and skirt", image: "/images/q7b_outfit_blair.jpg" },
      { id: "barbara", text: "Trendy crop top and jeans", image: "/images/q7c_outfit_barbara.jpg" },
      { id: "merliah", text: "Beach shorts and tank top", image: "/images/q7d_outfit_merliah.jpg" },
      { id: "mariposa", text: "Floral maxi dress", image: "/images/q7e_outfit_mariposa.jpg" },
    ],
  },
  {
    id: 8,
    question: "Choose your color palette:",
    options: [
      { id: "alexa", text: "Lavender & pink 💜", image: "/images/q8a_colors_alexa.jpg" },
      { id: "blair", text: "Blue & silver 💙", image: "/images/q8b_colors_blair.jpg" },
      { id: "barbara", text: "Hot pink & gold 💗", image: "/images/q8c_colors_barbara.jpg" },
      { id: "merliah", text: "Coral & turquoise 🧡", image: "/images/q8d_colors_merliah.jpg" },
      { id: "mariposa", text: "Rainbow pastels 🌈", image: "/images/q8e_colors_mariposa.jpg" },
    ],
  },
  {
    id: 9,
    question: "Signature accessory:",
    options: [
      { id: "alexa", text: "Sparkling tiara 👑", image: "/images/q9a_accessory_alexa.jpg" },
      { id: "blair", text: "Pearl earrings", image: "/images/q9b_accessory_blair.jpg" },
      { id: "barbara", text: "Sunglasses 😎", image: "/images/q9c_accessory_barbara.jpg" },
      { id: "merliah", text: "Surf bracelet 🏄‍♀️", image: "/images/q9d_accessory_merliah.jpg" },
      { id: "mariposa", text: "Butterfly hair clip 🦋", image: "/images/q9e_accessory_mariposa.jpg" },
    ],
  },
  {
    id: 10,
    question: "Where are you shopping today?",
    options: [
      { id: "alexa", text: "Dreamy magic boutique ✨", image: "/images/q10a_shop_alexa.jpg" },
      { id: "blair", text: "Royal palace mall 👑", image: "/images/q10b_shop_blair.jpg" },
      { id: "barbara", text: "Paris fashion street 💖", image: "/images/q10c_shop_barbara.jpg" },
      { id: "merliah", text: "Seaside surf shop 🌊", image: "/images/q10d_shop_merliah.jpg" },
      { id: "mariposa", text: "Enchanted garden fair 🌷", image: "/images/q10e_shop_mariposa.jpg" },
    ],
  },
];
