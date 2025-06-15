
import type { LucideIcon } from 'lucide-react';
import { Soup, Sparkles, ChefHat, Bean, Wheat, UtensilsCrossed, Salad, CakeSlice, Coffee } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  Icon: LucideIcon;
}

export const menuData: MenuCategory[] = [
  {
    id: "soup-shorba",
    name: "SOUP & SHORBA",
    Icon: Soup,
    items: [
      { id: "s1", name: "Broccoli & Tossed Pine Nut Shorba", price: "220", description: "Infused broccoli mixed with pine nuts, cumin seeds & Indian herbs" },
      { id: "s2", name: "Mulligatwany", price: "220", description: "Lentils based Indian specialty shorba" },
      { id: "s3", name: "Tomato Rasam", price: "220", description: "Fresh tomato broth with cumin, curry leaves & tamarind" },
      { id: "s4", name: "Bhatti Da Tamatar Dhania Shorba", price: "220", description: "Indian traditional tomato broth flavored with coriander" },
      { id: "s5", name: "Subz Ka Shorba", price: "220", description: "Garden fresh vegetables broth, cumin seed & Indian herbs" },
      { id: "s6", name: "Thupka", price: "220", description: "Signature of Northeast" },
    ],
  },
  {
    id: "appetizers",
    name: "APPETIZERS",
    Icon: Sparkles,
    items: [
      { id: "a1", name: "Amritsari Paneer Tikka", price: "425", description: "Cottage cheese marinated with our tangy spices, cooked in clay oven" },
      { id: "a2", name: "Paneer Pudina Tikka", price: "425", description: "Cottage cheese coated with fresh paste of ground mint leaves & other spices, cooked in clay oven" },
      { id: "a3", name: "Paneer Kali Mirch Tikka", price: "425", description: "Dices of cottage cheese marinated in Indian spices, sprinkled with crushed black pepper" },
      { id: "a4", name: "Tandoori Soya Chaap (Afghani/Achari)", price: "450", description: "Marinated soya chaap in chef's own spices & hung curd, cooked in tandoor" },
      { id: "a5", name: "Kaju Mutter Ki Shami", price: "350", description: "Cashew crusted green peas kebab cooked on slow flame" },
      { id: "a6", name: "Soya Chili Chaap Dry", price: "350", description: "Fried soya cubes tossed in sweet, sour, spicy sauce" },
      { id: "a7", name: "Bharwan Mushroom", price: "375", description: "Farm fresh cheese stuffed mushrooms" },
      { id: "a8", name: "Vegetable Kebab Platter", price: "525", description: "Chef's daily recommendation of three succulent kebabs" },
      { id: "a9", name: "Subz Akhrot Seekh Kebab", price: "350", description: "Skewered seasonal vegetables & walnut cooked in tandoor" },
      { id: "a10", name: "Hara Bhara Cheesy Kebab", price: "325", description: "Delicate cheese stuffed green patties, pan grilled in butter" },
      { id: "a11", name: "Subz Galouti Kebab", price: "325", description: "Assorted vegetables sautéed with Awadhi spices, cooked on tawa, served with shirmal" },
      { id: "a12", name: "Dahi Ke Kebab", price: "325", description: "Hung curd mixed with cottage cheese & bread crumbs with chef special spices" },
      { id: "a13", name: "Bharwan Aloo", price: "325", description: "Potatoes stuffed with dry fruits & anardana, finished in clay oven" },
      { id: "a14", name: "Beetroot Kebab", price: "350", description: "Beetroot kebab, naturally moist with all the nutrition, cooked on tawa, served with mint chutney" },
      { id: "a15", name: "Tandoori Phool", price: "375", description: "Broccoli marinated in creamy yoghurt & selected hand ground spices, cooked in tandoor" },
    ],
  },
  {
    id: "main-course",
    name: "MAIN COURSE",
    Icon: ChefHat,
    items: [
      { id: "mc1", name: "Vilayati Subz Kadhai", price: "550", description: "English vegetables cooked in chef's special kadhai masala" },
      { id: "mc2", name: "Ras Bhari Kofta", price: "400", description: "Homemade cheese dumpling, rich in chef special gravy" },
      { id: "mc3", name: "Paneer Keema Masala", price: "425", description: "Very finely chopped cottage cheese tempered in Indian spices" },
      { id: "mc4", name: "Mushroom Matar Hara Pyaz", price: "425", description: "Mushroom, peas & spring onion come together to make a delightful dish" },
      { id: "mc5", name: "Soya Chaap Masala", price: "425", description: "Deep fried soya chaap marinated in yogurt masala & added in tomato onion gravy" },
      { id: "mc6", name: "Bhuna Palak Paneer", price: "425", description: "Cottage cheese dices cooked with spinach in Indian traditional spices" },
      { id: "mc7", name: "Subz Teen Mirch Masala", price: "400", description: "Assorted vegetables cooked with red/black/green chili" },
      { id: "mc8", name: "Subz Begam Bahar", price: "500", description: "Cheesy dry nuts stuffed pepper served over chef's special gravy" },
      { id: "mc9", name: "Vegetable Nargisi Kofta", price: "425", description: "Cottage cheese with mashed vegetables" },
      { id: "mc10", name: "Paneer Khurchan", price: "425", description: "Cottage cheese cooked in tangy gravy with capsicum, tomato and onion flakes" },
      { id: "mc11", name: "Amchuri Bhindi Do Pyaza", price: "400", description: "Lady finger tossed twice with onions and tangy tomato gravy" },
      { id: "mc12", name: "Shahi Soya Korma", price: "400", description: "Soya chunk cooked in creamy based gravy" },
      { id: "mc13", name: "Dum Aloo Chatniwala", price: "400", description: "Fancy cut fried potatoes cooked with mint, coriander" },
      { id: "mc14", name: "Paneer Punjabi", price: "425", description: "Creamy cottage cheese cooked with julienne of capsicum and onion" },
      { id: "mc15", name: "Subz Nizami Handi", price: "400", description: "A rare combination of fresh vegetables cooked in handi" },
      { id: "mc16", name: "Kaju Curry", price: "475", description: "Cashew nuts cooked in royal rich gravy" },
      { id: "mc17", name: "Methi Matar Malai", price: "400", description: "Fried fresh fenugreek & kasuri methi and green peas cooked in creamy gravy" },
      { id: "mc18", name: "Paneer Makhani", price: "425", description: "Chunks of cottage cheese cooked in rich smooth makhan gravy" },
      { id: "mc19", name: "Bhindi Bhurji / Kurmuri Bhindi", price: "400", description: "Cooked as home style / Deep fried crispy okra" },
      { id: "mc20", name: "Paneer Takatak", price: "425", description: "Clay oven cooked homemade cheese processed with chef's special Indian masalas" },
      { id: "mc21", name: "Aloo Corn Capsicum Masala", price: "375", description: "Potato, corn & bell peppers cooked in onion & tomato gravy" },
      { id: "mc22", name: "Hare Masala Ka Bhuna Paneer", price: "425", description: "Diced cottage cheese fried & cooked in mint & coriander gravy" },
      { id: "mc23", name: "Ratlami Sev Tamatar (Local)", price: "350", description: "Combination of traditional tomato based bhaji with sev" },
      { id: "mc24", name: "Palak Apki Pasand", price: "400", description: "Corn/Aloo/Lehsooni/Kofta" },
      { id: "mc25", name: "Subz Apki Pasand", price: "400", description: "Mix veg/Kolhapuri/Kadhai/Jalfrezi/Handi" },
      { id: "mc26", name: "Aloo Methi / Aloo Jeera", price: "375", description: "Boiled potatoes tossed with fenugreek or cumin seed" },
      { id: "mc27", name: "Dum Aloo Banarasi", price: "375", description: "Stuffed potato cooked in rich delicious gravy" },
      { id: "mc28", name: "Aloo Gobhi Adraki / Matar Tamatar", price: "375", description: "Cauliflower preparation in Indian spices with ginger julienne / tomato & green peas" },
      { id: "mc29", name: "Pindi Chole", price: "350", description: "Chickpea cooked in Punjabi khada spices in traditional Punjabi style" },
      { id: "mc30", name: "Aloo Payaz ki Subzi", price: "375", description: "Potatoes & black seed onion cooked with chef special spices" },
      { id: "mc31", name: "Navratan Korma", price: "400", description: "Combination of nine fresh garden vegetables cooked in nawabi rich white gravy" },
    ],
  },
  {
    id: "pulses",
    name: "PULSES",
    Icon: Bean,
    items: [
      { id: "p1", name: "Punjabi Rajma", price: "325", description: "Red kidney beans with Indian spices cooked in Punjabi home style" },
      { id: "p2", name: "Dal E Aroma", price: "350", description: "Black lentils, tomatoes, ginger and garlic simmered overnight on slow charcoal fire, finished with cream" },
      { id: "p3", name: "Dal Arhar Lasooni", price: "300", description: "Arhar lentils cooked with yellow chilies" },
      { id: "p4", name: "Dal Palak", price: "300", description: "Arhar dal cooked with spinach" },
      { id: "p5", name: "Handi Dal", price: "300", description: "A unique combination of black urad, toor, chana and kidney bean" },
      { id: "p6", name: "Ghar ki Kadhi", price: "300", description: "Punjabi, Gujarati, Rajasthani style" },
      { id: "p7", name: "Dal Panchmel", price: "300", description: "Five types of lentils flavored with onion & garlic, cooked Malwa style" },
    ],
  },
  {
    id: "indian-bread",
    name: "INDIAN BREAD",
    Icon: Wheat,
    items: [
      { id: "b1", name: "Tandoori Roti (Plain/Butter)", price: "55/60" },
      { id: "b2", name: "Naan (Plain/Butter/Garlic)", price: "55/65/70" },
      { id: "b3", name: "Paratha (Laccha/Pudina)", price: "60/65" },
      { id: "b4", name: "Amritsari Kulcha", price: "70" },
      { id: "b5", name: "Roomali Roti (Plain/Butter)", price: "65/70" },
      { id: "b6", name: "Missi Roti (Plain/Butter)", price: "60/65" },
      { id: "b7", name: "Cheese Naan", price: "85" },
      { id: "b8", name: "Kashmiri Naan", price: "100" },
      { id: "b9", name: "Warqi Paratha", price: "95" },
      { id: "b10", name: "Khasta Roti", price: "95" },
      { id: "b11", name: "Family Basket (Assorted)", price: "275" },
    ],
  },
  {
    id: "rice",
    name: "RICE",
    Icon: UtensilsCrossed,
    items: [
      { id: "r1", name: "Veg Handi Biryani", price: "425", description: "Basmati rice simmered with vegetables, finished in handi" },
      { id: "r2", name: "Soya Chaap Dum Biryani", price: "425", description: "Basmati rice simmered with vegetables & soya chunks, finished in handi" },
      { id: "r3", name: "Steamed Rice", price: "275" },
      { id: "r4", name: "Jeera Rice", price: "300" },
      { id: "r5", name: "Kashmiri Pulao", price: "375", description: "Basmati rice tossed with sautéed fruits" },
      { id: "r6", name: "Khichadi (Butter/Masala/Vegetable)", price: "325" },
    ],
  },
  {
    id: "side-orders-salads",
    name: "SIDE ORDERS & SALADS",
    Icon: Salad,
    items: [
      { id: "ss1", name: "Mewa Makhana Raita", price: "130", description: "Dry fruits enriched yoghurt" },
      { id: "ss2", name: "Burani Raita", price: "125", description: "Deep fried onion flavored yoghurt" },
      { id: "ss3", name: "Boondi Raita", price: "125", description: "Homemade boondi served over Indian spiced curd" },
      { id: "ss4", name: "Subz Ka Raita", price: "125", description: "Assorted vegetables yoghurt" },
      { id: "ss5", name: "Ananas Raita", price: "140", description: "Preserved pineapple served in slightly sweet curd" },
      { id: "ss6", name: "Raita of Your Choice", price: "120", description: "Cucumber, tomato, onion" },
      { id: "ss7", name: "Masala Papad", price: "160", description: "Fried/Roasted" },
      { id: "ss8", name: "Peanut Chat", price: "170", description: "Fried/Roasted" },
      { id: "ss9", name: "Green Salad", price: "155", description: "Garden fresh seasonal salad" },
      { id: "ss10", name: "Kachumber Salad", price: "160" },
      { id: "ss11", name: "Onion Salad", price: "120" },
      { id: "ss12", name: "Hara Moong Salad", price: "175", description: "Sprouted moong mixed with chopped onion, tomato, green chilli, lemon juice & chaat masala" },
      { id: "ss13", name: "Chatpata Chana Salad", price: "160", description: "Homemade chickpea tangy salad" },
      { id: "ss14", name: "Punjabi Salad", price: "160", description: "Fresh vegetables cut in finger size" },
    ],
  },
  {
    id: "desserts",
    name: "DESSERTS",
    Icon: CakeSlice,
    items: [
      { id: "d1", name: "Jhodhpuri Lancha", price: "220", description: "Honey and pistachio stuffed barrel shaped fried dumplings" },
      { id: "d2", name: "Choice of Halwa", price: "220", description: "Moong dal/Gajareyla (seasonal)" },
      { id: "d3", name: "Gulab Jamun", price: "220", description: "Deep fried dumpling soaked in sugar syrup" },
      { id: "d4", name: "Kulhad Kesari Phirni", price: "220", description: "Saffron & cardamom flavored light dessert of milk & ground basmati rice" },
      { id: "d5", name: "Rasmalai", price: "220", description: "Delicious chenna dessert" },
      { id: "d6", name: "Fruit Rabri", price: "220", description: "Thick condensed milk with added seasonal fruits" },
      { id: "d7", name: "Fried Ice Cream", price: "250", description: "Scoop of ice cream deep fried & served with chocolate sauce" },
      { id: "d8", name: "Walnut Brownie with Vanilla", price: "220" },
      { id: "d9", name: "Choice of Ice Cream", price: "150", description: "Please ask your server for flavor" },
    ],
  },
  {
    id: "beverages",
    name: "BEVERAGES",
    Icon: Coffee,
    items: [
      { id: "bv1", name: "Jeera Pudina Sip", price: "110", description: "Iced lemon water with fresh mint & broiled cumin" },
      { id: "bv2", name: "Lassi", price: "120", description: "Sweet, salted or masala" },
      { id: "bv3", name: "Taaze Phal Ka Ras", price: "120", description: "Choice of seasonal fresh fruit juice" },
      { id: "bv4", name: "Cold Coffee", price: "130" },
      { id: "bv5", name: "Milk Shake", price: "130", description: "Banana, vanilla, chocolate, strawberry" },
      { id: "bv6", name: "Fresh Lime", price: "95", description: "Soda, water" },
      { id: "bv7", name: "Choice of Tea", price: "75" },
      { id: "bv8", name: "Coffee", price: "92", description: "Espresso, cappuccino, latte, macchiato" },
      { id: "bv9", name: "Aerated Beverages", price: "75" },
      { id: "bv10", name: "Himalayan Natural Mineral Water", price: "120" },
      { id: "bv11", name: "Energy Drink", price: "175" },
    ],
  },
];
