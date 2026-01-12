export interface PricingItem {
  model: string;
  screen: string;
  battery: string;
  camera: string;
  backGlass: string;
}

export const iphonePricing: PricingItem[] = [
  { model: "iPhone 16 Pro Max", screen: "280€", battery: "89€", camera: "159€", backGlass: "189€" },
  { model: "iPhone 16 Pro", screen: "250€", battery: "89€", camera: "179€", backGlass: "179€" },
  { model: "iPhone 16 Plus", screen: "260€", battery: "89€", camera: "169€", backGlass: "179€" },
  { model: "iPhone 16", screen: "195€", battery: "89€", camera: "169€", backGlass: "179€" },
  { model: "iPhone 15 Pro Max", screen: "210€", battery: "79€", camera: "135€", backGlass: "179€" },
  { model: "iPhone 15 Pro", screen: "250€", battery: "79€", camera: "135€", backGlass: "179€" },
  { model: "iPhone 15 Plus", screen: "179€", battery: "79€", camera: "125€", backGlass: "159€" },
  { model: "iPhone 15", screen: "185€", battery: "79€", camera: "125€", backGlass: "139€" },
  { model: "iPhone 14 Pro Max", screen: "185€", battery: "69€", camera: "115€", backGlass: "230€" },
  { model: "iPhone 14 Pro", screen: "210€", battery: "69€", camera: "115€", backGlass: "215€" },
  { model: "iPhone 14 Plus", screen: "135€", battery: "69€", camera: "115€", backGlass: "135€" },
  { model: "iPhone 14", screen: "135€", battery: "69€", camera: "105€", backGlass: "130€" },
  { model: "iPhone 13 Pro Max", screen: "149€", battery: "59€", camera: "135€", backGlass: "210€" },
  { model: "iPhone 13 Pro", screen: "149€", battery: "59€", camera: "135€", backGlass: "210€" },
  { model: "iPhone 13", screen: "135€", battery: "59€", camera: "99€", backGlass: "179€" },
  { model: "iPhone 13 Mini", screen: "125€", battery: "59€", camera: "99€", backGlass: "170€" },
  { model: "iPhone 12 Pro Max", screen: "140€", battery: "55€", camera: "110€", backGlass: "180€" },
  { model: "iPhone 12 Pro", screen: "115€", battery: "55€", camera: "110€", backGlass: "180€" },
  { model: "iPhone 12", screen: "115€", battery: "55€", camera: "89€", backGlass: "149€" },
  { model: "iPhone 12 Mini", screen: "120€", battery: "105€", camera: "130€", backGlass: "160€" },
  { model: "iPhone 11 Pro Max", screen: "130€", battery: "49€", camera: "105€", backGlass: "160€" },
  { model: "iPhone 11 Pro", screen: "140€", battery: "49€", camera: "105€", backGlass: "130€" },
  { model: "iPhone 11", screen: "79€", battery: "49€", camera: "79€", backGlass: "105€" },
  { model: "iPhone XS Max", screen: "125€", battery: "49€", camera: "59€", backGlass: "105€" },
  { model: "iPhone XS", screen: "99€", battery: "49€", camera: "59€", backGlass: "95€" },
  { model: "iPhone XR", screen: "65€", battery: "45€", camera: "59€", backGlass: "85€" },
  { model: "iPhone X", screen: "89€", battery: "45€", camera: "59€", backGlass: "95€" },
  { model: "iPhone 8 Plus", screen: "39€", battery: "45€", camera: "49€", backGlass: "85€" },
  { model: "iPhone 8/SE 2020", screen: "49€", battery: "45€", camera: "45€", backGlass: "85€" },
  { model: "iPhone 7 Plus", screen: "39€", battery: "45€", camera: "45€", backGlass: "85€" },
  { model: "iPhone 6S Plus", screen: "39€", battery: "45€", camera: "22€", backGlass: "69€" },
  { model: "iPhone 6S", screen: "29€", battery: "45€", camera: "22€", backGlass: "59€" },
];

export const samsungPricing: PricingItem[] = [
  { model: "Samsung Galaxy S24 Ultra", screen: "270€", battery: "69€", camera: "125€", backGlass: "155€" },
  { model: "Samsung Galaxy S24+", screen: "245€", battery: "69€", camera: "115€", backGlass: "135€" },
  { model: "Samsung Galaxy S24", screen: "215€", battery: "59€", camera: "105€", backGlass: "119€" },
  { model: "Samsung Galaxy S23 Ultra", screen: "245€", battery: "59€", camera: "115€", backGlass: "145€" },
  { model: "Samsung Galaxy S23+", screen: "225€", battery: "59€", camera: "105€", backGlass: "129€" },
  { model: "Samsung Galaxy S23", screen: "195€", battery: "49€", camera: "99€", backGlass: "115€" },
  { model: "Samsung Galaxy S22 Ultra", screen: "215€", battery: "49€", camera: "105€", backGlass: "135€" },
  { model: "Samsung Galaxy S22+", screen: "195€", battery: "49€", camera: "99€", backGlass: "119€" },
  { model: "Samsung Galaxy S22", screen: "169€", battery: "45€", camera: "89€", backGlass: "105€" },
  { model: "Samsung Galaxy S21 Ultra", screen: "195€", battery: "45€", camera: "99€", backGlass: "129€" },
  { model: "Samsung Galaxy S21+", screen: "169€", battery: "45€", camera: "89€", backGlass: "115€" },
  { model: "Samsung Galaxy S21", screen: "145€", battery: "39€", camera: "85€", backGlass: "99€" },
  { model: "Samsung Galaxy S20 Ultra", screen: "169€", battery: "45€", camera: "89€", backGlass: "119€" },
  { model: "Samsung Galaxy S20+", screen: "145€", battery: "39€", camera: "85€", backGlass: "105€" },
  { model: "Samsung Galaxy S20", screen: "129€", battery: "39€", camera: "75€", backGlass: "89€" },
  { model: "Samsung Galaxy Z Fold 5", screen: "349€", battery: "99€", camera: "135€", backGlass: "195€" },
  { model: "Samsung Galaxy Z Fold 4", screen: "325€", battery: "89€", camera: "129€", backGlass: "175€" },
  { model: "Samsung Galaxy Z Flip 5", screen: "245€", battery: "75€", camera: "105€", backGlass: "135€" },
  { model: "Samsung Galaxy Z Flip 4", screen: "225€", battery: "69€", camera: "99€", backGlass: "119€" },
  { model: "Samsung Galaxy A54", screen: "115€", battery: "39€", camera: "65€", backGlass: "75€" },
  { model: "Samsung Galaxy A53", screen: "105€", battery: "39€", camera: "59€", backGlass: "65€" },
  { model: "Samsung Galaxy A34", screen: "95€", battery: "35€", camera: "49€", backGlass: "59€" },
  { model: "Samsung Galaxy A33", screen: "89€", battery: "35€", camera: "49€", backGlass: "49€" },
];

export const xiaomiPricing: PricingItem[] = [
  { model: "Xiaomi 14 Ultra", screen: "205€", battery: "59€", camera: "99€", backGlass: "115€" },
  { model: "Xiaomi 14 Pro", screen: "189€", battery: "59€", camera: "89€", backGlass: "105€" },
  { model: "Xiaomi 14", screen: "169€", battery: "49€", camera: "85€", backGlass: "99€" },
  { model: "Xiaomi 13 Ultra", screen: "189€", battery: "49€", camera: "89€", backGlass: "105€" },
  { model: "Xiaomi 13 Pro", screen: "169€", battery: "49€", camera: "85€", backGlass: "99€" },
  { model: "Xiaomi 13", screen: "145€", battery: "45€", camera: "75€", backGlass: "89€" },
  { model: "Xiaomi 12 Pro", screen: "145€", battery: "45€", camera: "75€", backGlass: "89€" },
  { model: "Xiaomi 12", screen: "129€", battery: "39€", camera: "69€", backGlass: "79€" },
  { model: "Xiaomi 11 Ultra", screen: "135€", battery: "45€", camera: "72€", backGlass: "85€" },
  { model: "Xiaomi 11", screen: "115€", battery: "39€", camera: "65€", backGlass: "75€" },
  { model: "Xiaomi Redmi Note 13 Pro+", screen: "105€", battery: "39€", camera: "59€", backGlass: "65€" },
  { model: "Xiaomi Redmi Note 13 Pro", screen: "95€", battery: "35€", camera: "55€", backGlass: "59€" },
  { model: "Xiaomi Redmi Note 13", screen: "85€", battery: "35€", camera: "49€", backGlass: "49€" },
  { model: "Xiaomi Redmi Note 12 Pro+", screen: "95€", battery: "35€", camera: "55€", backGlass: "59€" },
  { model: "Xiaomi Redmi Note 12 Pro", screen: "89€", battery: "35€", camera: "49€", backGlass: "55€" },
  { model: "Xiaomi Redmi Note 12", screen: "75€", battery: "29€", camera: "45€", backGlass: "45€" },
  { model: "Xiaomi Poco F5 Pro", screen: "105€", battery: "39€", camera: "59€", backGlass: "65€" },
  { model: "Xiaomi Poco F5", screen: "89€", battery: "35€", camera: "49€", backGlass: "55€" },
  { model: "Xiaomi Poco X6 Pro", screen: "95€", battery: "35€", camera: "55€", backGlass: "59€" },
  { model: "Xiaomi Poco X6", screen: "85€", battery: "35€", camera: "45€", backGlass: "49€" },
];

export const huaweiPricing: PricingItem[] = [
  { model: "Huawei P60 Pro", screen: "199€", battery: "59€", camera: "95€", backGlass: "110€" },
  { model: "Huawei P60", screen: "169€", battery: "49€", camera: "85€", backGlass: "99€" },
  { model: "Huawei Mate 60 Pro", screen: "215€", battery: "59€", camera: "105€", backGlass: "120€" },
  { model: "Huawei Mate 60", screen: "189€", battery: "59€", camera: "89€", backGlass: "105€" },
  { model: "Huawei P50 Pro", screen: "169€", battery: "49€", camera: "85€", backGlass: "99€" },
  { model: "Huawei P50", screen: "145€", battery: "45€", camera: "75€", backGlass: "89€" },
  { model: "Huawei Mate 50 Pro", screen: "179€", battery: "49€", camera: "89€", backGlass: "105€" },
  { model: "Huawei Mate 50", screen: "159€", battery: "49€", camera: "79€", backGlass: "95€" },
  { model: "Huawei P40 Pro", screen: "135€", battery: "45€", camera: "72€", backGlass: "85€" },
  { model: "Huawei P40", screen: "119€", battery: "39€", camera: "65€", backGlass: "75€" },
  { model: "Huawei Mate 40 Pro", screen: "149€", battery: "45€", camera: "75€", backGlass: "89€" },
  { model: "Huawei Nova 12 Pro", screen: "115€", battery: "39€", camera: "65€", backGlass: "72€" },
  { model: "Huawei Nova 12", screen: "95€", battery: "35€", camera: "55€", backGlass: "65€" },
  { model: "Huawei Nova 11 Pro", screen: "105€", battery: "39€", camera: "59€", backGlass: "69€" },
  { model: "Huawei Nova 11", screen: "89€", battery: "35€", camera: "49€", backGlass: "59€" },
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
