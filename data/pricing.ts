export interface PricingItem {
  model: string;
  screen: string;
  battery: string;
  camera: string;
  backGlass: string;
}

export const iphonePricing: PricingItem[] = [
  { model: "iPhone 16 Pro Max", screen: "240€", battery: "75€", camera: "135€", backGlass: "160€" },
  { model: "iPhone 16 Pro", screen: "215€", battery: "75€", camera: "150€", backGlass: "150€" },
  { model: "iPhone 16 Plus", screen: "220€", battery: "75€", camera: "145€", backGlass: "150€" },
  { model: "iPhone 16", screen: "165€", battery: "75€", camera: "145€", backGlass: "150€" },
  { model: "iPhone 15 Pro Max", screen: "180€", battery: "65€", camera: "115€", backGlass: "150€" },
  { model: "iPhone 15 Pro", screen: "215€", battery: "65€", camera: "115€", backGlass: "150€" },
  { model: "iPhone 15 Plus", screen: "150€", battery: "65€", camera: "105€", backGlass: "135€" },
  { model: "iPhone 15", screen: "155€", battery: "65€", camera: "105€", backGlass: "120€" },
  { model: "iPhone 14 Pro Max", screen: "155€", battery: "60€", camera: "100€", backGlass: "195€" },
  { model: "iPhone 14 Pro", screen: "180€", battery: "60€", camera: "100€", backGlass: "185€" },
  { model: "iPhone 14 Plus", screen: "115€", battery: "60€", camera: "100€", backGlass: "115€" },
  { model: "iPhone 14", screen: "115€", battery: "60€", camera: "90€", backGlass: "110€" },
  { model: "iPhone 13 Pro Max", screen: "125€", battery: "50€", camera: "115€", backGlass: "180€" },
  { model: "iPhone 13 Pro", screen: "125€", battery: "50€", camera: "115€", backGlass: "180€" },
  { model: "iPhone 13", screen: "115€", battery: "50€", camera: "85€", backGlass: "150€" },
  { model: "iPhone 13 Mini", screen: "105€", battery: "50€", camera: "85€", backGlass: "145€" },
  { model: "iPhone 12 Pro Max", screen: "120€", battery: "45€", camera: "95€", backGlass: "155€" },
  { model: "iPhone 12 Pro", screen: "100€", battery: "45€", camera: "95€", backGlass: "155€" },
  { model: "iPhone 12", screen: "100€", battery: "45€", camera: "75€", backGlass: "125€" },
  { model: "iPhone 12 Mini", screen: "100€", battery: "90€", camera: "110€", backGlass: "135€" },
  { model: "iPhone 11 Pro Max", screen: "110€", battery: "40€", camera: "90€", backGlass: "135€" },
  { model: "iPhone 11 Pro", screen: "120€", battery: "40€", camera: "90€", backGlass: "110€" },
  { model: "iPhone 11", screen: "65€", battery: "40€", camera: "65€", backGlass: "90€" },
  { model: "iPhone XS Max", screen: "105€", battery: "40€", camera: "50€", backGlass: "90€" },
  { model: "iPhone XS", screen: "85€", battery: "40€", camera: "50€", backGlass: "80€" },
  { model: "iPhone XR", screen: "55€", battery: "40€", camera: "50€", backGlass: "70€" },
  { model: "iPhone X", screen: "75€", battery: "40€", camera: "50€", backGlass: "80€" },
  { model: "iPhone 8 Plus", screen: "35€", battery: "40€", camera: "40€", backGlass: "70€" },
  { model: "iPhone 8/SE 2020", screen: "40€", battery: "40€", camera: "40€", backGlass: "70€" },
  { model: "iPhone 7 Plus", screen: "35€", battery: "40€", camera: "40€", backGlass: "70€" },
  { model: "iPhone 6S Plus", screen: "35€", battery: "40€", camera: "20€", backGlass: "60€" },
  { model: "iPhone 6S", screen: "25€", battery: "40€", camera: "20€", backGlass: "50€" },
];

export const samsungPricing: PricingItem[] = [
  { model: "Samsung Galaxy S24 Ultra", screen: "230€", battery: "60€", camera: "105€", backGlass: "130€" },
  { model: "Samsung Galaxy S24+", screen: "210€", battery: "60€", camera: "100€", backGlass: "115€" },
  { model: "Samsung Galaxy S24", screen: "185€", battery: "50€", camera: "90€", backGlass: "100€" },
  { model: "Samsung Galaxy S23 Ultra", screen: "210€", battery: "50€", camera: "100€", backGlass: "125€" },
  { model: "Samsung Galaxy S23+", screen: "190€", battery: "50€", camera: "90€", backGlass: "110€" },
  { model: "Samsung Galaxy S23", screen: "165€", battery: "40€", camera: "85€", backGlass: "100€" },
  { model: "Samsung Galaxy S22 Ultra", screen: "185€", battery: "40€", camera: "90€", backGlass: "115€" },
  { model: "Samsung Galaxy S22+", screen: "165€", battery: "40€", camera: "85€", backGlass: "100€" },
  { model: "Samsung Galaxy S22", screen: "145€", battery: "40€", camera: "75€", backGlass: "90€" },
  { model: "Samsung Galaxy S21 Ultra", screen: "165€", battery: "40€", camera: "85€", backGlass: "110€" },
  { model: "Samsung Galaxy S21+", screen: "145€", battery: "40€", camera: "75€", backGlass: "100€" },
  { model: "Samsung Galaxy S21", screen: "125€", battery: "35€", camera: "70€", backGlass: "85€" },
  { model: "Samsung Galaxy S20 Ultra", screen: "145€", battery: "40€", camera: "75€", backGlass: "100€" },
  { model: "Samsung Galaxy S20+", screen: "125€", battery: "35€", camera: "70€", backGlass: "90€" },
  { model: "Samsung Galaxy S20", screen: "110€", battery: "35€", camera: "65€", backGlass: "75€" },
  { model: "Samsung Galaxy Z Fold 5", screen: "300€", battery: "85€", camera: "115€", backGlass: "165€" },
  { model: "Samsung Galaxy Z Fold 4", screen: "275€", battery: "75€", camera: "110€", backGlass: "150€" },
  { model: "Samsung Galaxy Z Flip 5", screen: "210€", battery: "65€", camera: "90€", backGlass: "115€" },
  { model: "Samsung Galaxy Z Flip 4", screen: "190€", battery: "60€", camera: "85€", backGlass: "100€" },
  { model: "Samsung Galaxy A54", screen: "100€", battery: "35€", camera: "55€", backGlass: "65€" },
  { model: "Samsung Galaxy A53", screen: "90€", battery: "35€", camera: "50€", backGlass: "55€" },
  { model: "Samsung Galaxy A34", screen: "80€", battery: "30€", camera: "40€", backGlass: "50€" },
  { model: "Samsung Galaxy A33", screen: "75€", battery: "30€", camera: "40€", backGlass: "40€" },
];

export const xiaomiPricing: PricingItem[] = [
  { model: "Xiaomi 14 Ultra", screen: "175€", battery: "50€", camera: "85€", backGlass: "100€" },
  { model: "Xiaomi 14 Pro", screen: "160€", battery: "50€", camera: "75€", backGlass: "90€" },
  { model: "Xiaomi 14", screen: "145€", battery: "40€", camera: "70€", backGlass: "85€" },
  { model: "Xiaomi 13 Ultra", screen: "160€", battery: "40€", camera: "75€", backGlass: "90€" },
  { model: "Xiaomi 13 Pro", screen: "145€", battery: "40€", camera: "70€", backGlass: "85€" },
  { model: "Xiaomi 13", screen: "125€", battery: "40€", camera: "65€", backGlass: "75€" },
  { model: "Xiaomi 12 Pro", screen: "125€", battery: "40€", camera: "65€", backGlass: "75€" },
  { model: "Xiaomi 12", screen: "110€", battery: "35€", camera: "60€", backGlass: "65€" },
  { model: "Xiaomi 11 Ultra", screen: "115€", battery: "40€", camera: "60€", backGlass: "70€" },
  { model: "Xiaomi 11", screen: "100€", battery: "35€", camera: "55€", backGlass: "65€" },
  { model: "Xiaomi Redmi Note 13 Pro+", screen: "90€", battery: "35€", camera: "50€", backGlass: "55€" },
  { model: "Xiaomi Redmi Note 13 Pro", screen: "80€", battery: "30€", camera: "45€", backGlass: "50€" },
  { model: "Xiaomi Redmi Note 13", screen: "70€", battery: "30€", camera: "40€", backGlass: "40€" },
  { model: "Xiaomi Redmi Note 12 Pro+", screen: "80€", battery: "30€", camera: "45€", backGlass: "50€" },
  { model: "Xiaomi Redmi Note 12 Pro", screen: "75€", battery: "30€", camera: "40€", backGlass: "45€" },
  { model: "Xiaomi Redmi Note 12", screen: "65€", battery: "25€", camera: "40€", backGlass: "40€" },
  { model: "Xiaomi Poco F5 Pro", screen: "90€", battery: "35€", camera: "50€", backGlass: "55€" },
  { model: "Xiaomi Poco F5", screen: "75€", battery: "30€", camera: "40€", backGlass: "45€" },
  { model: "Xiaomi Poco X6 Pro", screen: "80€", battery: "30€", camera: "45€", backGlass: "50€" },
  { model: "Xiaomi Poco X6", screen: "70€", battery: "30€", camera: "40€", backGlass: "40€" },
];

export const huaweiPricing: PricingItem[] = [
  { model: "Huawei P60 Pro", screen: "170€", battery: "50€", camera: "80€", backGlass: "95€" },
  { model: "Huawei P60", screen: "145€", battery: "40€", camera: "70€", backGlass: "85€" },
  { model: "Huawei Mate 60 Pro", screen: "185€", battery: "50€", camera: "90€", backGlass: "100€" },
  { model: "Huawei Mate 60", screen: "160€", battery: "50€", camera: "75€", backGlass: "90€" },
  { model: "Huawei P50 Pro", screen: "145€", battery: "40€", camera: "70€", backGlass: "85€" },
  { model: "Huawei P50", screen: "125€", battery: "40€", camera: "65€", backGlass: "75€" },
  { model: "Huawei Mate 50 Pro", screen: "150€", battery: "40€", camera: "75€", backGlass: "90€" },
  { model: "Huawei Mate 50", screen: "135€", battery: "40€", camera: "65€", backGlass: "80€" },
  { model: "Huawei P40 Pro", screen: "115€", battery: "40€", camera: "60€", backGlass: "70€" },
  { model: "Huawei P40", screen: "100€", battery: "35€", camera: "55€", backGlass: "65€" },
  { model: "Huawei Mate 40 Pro", screen: "125€", battery: "40€", camera: "65€", backGlass: "75€" },
  { model: "Huawei Nova 12 Pro", screen: "100€", battery: "35€", camera: "55€", backGlass: "60€" },
  { model: "Huawei Nova 12", screen: "80€", battery: "30€", camera: "45€", backGlass: "55€" },
  { model: "Huawei Nova 11 Pro", screen: "90€", battery: "35€", camera: "50€", backGlass: "60€" },
  { model: "Huawei Nova 11", screen: "75€", battery: "30€", camera: "40€", backGlass: "50€" },
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
    description: "12 mois"
  }
];
