export interface PricingItem {
  model: string;
  screen: string;
  battery: string;
  camera: string;
  backGlass: string;
}

export const iphonePricing: PricingItem[] = [
  { model: "iPhone 16 Pro Max", screen: "310€", battery: "99€", camera: "179€", backGlass: "210€" },
  { model: "iPhone 16 Pro", screen: "280€", battery: "100€", camera: "199€", backGlass: "199€" },
  { model: "iPhone 16 Plus", screen: "290€", battery: "99€", camera: "189€", backGlass: "199€" },
  { model: "iPhone 16", screen: "220€", battery: "99€", camera: "189€", backGlass: "199€" },
  { model: "iPhone 15 Pro Max", screen: "235€", battery: "89€", camera: "149€", backGlass: "199€" },
  { model: "iPhone 15 Pro", screen: "280€", battery: "89€", camera: "149€", backGlass: "199€" },
  { model: "iPhone 15 Plus", screen: "199€", battery: "89€", camera: "139€", backGlass: "179€" },
  { model: "iPhone 15", screen: "205€", battery: "89€", camera: "139€", backGlass: "159€" },
  { model: "iPhone 14 Pro Max", screen: "205€", battery: "79€", camera: "129€", backGlass: "260€" },
  { model: "iPhone 14 Pro", screen: "235€", battery: "79€", camera: "129€", backGlass: "240€" },
  { model: "iPhone 14 Plus", screen: "150€", battery: "79€", camera: "129€", backGlass: "150€" },
  { model: "iPhone 14", screen: "149€", battery: "79€", camera: "119€", backGlass: "145€" },
  { model: "iPhone 13 Pro Max", screen: "165€", battery: "69€", camera: "149€", backGlass: "235€" },
  { model: "iPhone 13 Pro", screen: "165€", battery: "69€", camera: "149€", backGlass: "235€" },
  { model: "iPhone 13", screen: "150€", battery: "69€", camera: "109€", backGlass: "199€" },
  { model: "iPhone 13 Mini", screen: "140€", battery: "69€", camera: "109€", backGlass: "190€" },
  { model: "iPhone 12 Pro Max", screen: "157€", battery: "60€", camera: "125€", backGlass: "200€" },
  { model: "iPhone 12 Pro", screen: "130€", battery: "60€", camera: "125€", backGlass: "200€" },
  { model: "iPhone 12", screen: "130€", battery: "60€", camera: "99€", backGlass: "169€" },
  { model: "iPhone 12 Mini", screen: "135€", battery: "120€", camera: "145€", backGlass: "180€" },
  { model: "iPhone 11 Pro Max", screen: "145€", battery: "59€", camera: "119€", backGlass: "180€" },
  { model: "iPhone 11 Pro", screen: "157€", battery: "59€", camera: "119€", backGlass: "145€" },
  { model: "iPhone 11", screen: "89€", battery: "60€", camera: "89€", backGlass: "120€" },
  { model: "iPhone XS Max", screen: "140€", battery: "59€", camera: "69€", backGlass: "120€" },
  { model: "iPhone XS", screen: "115€", battery: "59€", camera: "69€", backGlass: "110€" },
  { model: "iPhone XR", screen: "75€", battery: "49€", camera: "69€", backGlass: "99€" },
  { model: "iPhone X", screen: "100€", battery: "49€", camera: "69€", backGlass: "109€" },
  { model: "iPhone 8 Plus", screen: "45€", battery: "49€", camera: "59€", backGlass: "99€" },
  { model: "iPhone 8/SE 2020", screen: "59€", battery: "49€", camera: "49€", backGlass: "99€" },
  { model: "iPhone 7 Plus", screen: "45€", battery: "49€", camera: "49€", backGlass: "99€" },
  { model: "iPhone 6S Plus", screen: "45€", battery: "49€", camera: "25€", backGlass: "79€" },
  { model: "iPhone 6S", screen: "35€", battery: "49€", camera: "25€", backGlass: "69€" },
];

export const samsungPricing: PricingItem[] = [
  { model: "Samsung Galaxy S24 Ultra", screen: "350€", battery: "89€", camera: "159€", backGlass: "199€" },
  { model: "Samsung Galaxy S24+", screen: "320€", battery: "89€", camera: "149€", backGlass: "179€" },
  { model: "Samsung Galaxy S24", screen: "280€", battery: "79€", camera: "139€", backGlass: "159€" },
  { model: "Samsung Galaxy S23 Ultra", screen: "320€", battery: "79€", camera: "149€", backGlass: "189€" },
  { model: "Samsung Galaxy S23+", screen: "290€", battery: "79€", camera: "139€", backGlass: "169€" },
  { model: "Samsung Galaxy S23", screen: "250€", battery: "69€", camera: "129€", backGlass: "149€" },
  { model: "Samsung Galaxy S22 Ultra", screen: "280€", battery: "69€", camera: "139€", backGlass: "179€" },
  { model: "Samsung Galaxy S22+", screen: "250€", battery: "69€", camera: "129€", backGlass: "159€" },
  { model: "Samsung Galaxy S22", screen: "220€", battery: "59€", camera: "119€", backGlass: "139€" },
  { model: "Samsung Galaxy S21 Ultra", screen: "250€", battery: "59€", camera: "129€", backGlass: "169€" },
  { model: "Samsung Galaxy S21+", screen: "220€", battery: "59€", camera: "119€", backGlass: "149€" },
  { model: "Samsung Galaxy S21", screen: "190€", battery: "49€", camera: "109€", backGlass: "129€" },
  { model: "Samsung Galaxy S20 Ultra", screen: "220€", battery: "59€", camera: "119€", backGlass: "159€" },
  { model: "Samsung Galaxy S20+", screen: "190€", battery: "49€", camera: "109€", backGlass: "139€" },
  { model: "Samsung Galaxy S20", screen: "170€", battery: "49€", camera: "99€", backGlass: "119€" },
  { model: "Samsung Galaxy Z Fold 5", screen: "450€", battery: "129€", camera: "179€", backGlass: "249€" },
  { model: "Samsung Galaxy Z Fold 4", screen: "420€", battery: "119€", camera: "169€", backGlass: "229€" },
  { model: "Samsung Galaxy Z Flip 5", screen: "320€", battery: "99€", camera: "139€", backGlass: "179€" },
  { model: "Samsung Galaxy Z Flip 4", screen: "290€", battery: "89€", camera: "129€", backGlass: "159€" },
  { model: "Samsung Galaxy A54", screen: "150€", battery: "59€", camera: "89€", backGlass: "99€" },
  { model: "Samsung Galaxy A53", screen: "140€", battery: "49€", camera: "79€", backGlass: "89€" },
  { model: "Samsung Galaxy A34", screen: "130€", battery: "49€", camera: "69€", backGlass: "79€" },
  { model: "Samsung Galaxy A33", screen: "120€", battery: "49€", camera: "69€", backGlass: "69€" },
];

export const serviceFeatures = [
  {
    title: "Nos ateliers",
    locations: ["Bruxelles", "Geraardsbergen"]
  },
  {
    title: "Service mobile",
    description: "Déplacements possibles"
  },
  {
    title: "Garantie",
    description: "6 à 12 mois"
  }
];
