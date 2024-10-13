export type Equipment = "Belt_bag" | "Boombox" | "Extension_ladder" | "Flashlight" | "Jetpack" | "Lockpicker" | "Pro-flashlight" | "Radar-booster"
  | "Shovel" | "Spray_paint" | "Stun_grenade" | "TZP-Inhalant" | "Walkie-talkie" | "Weed_killer" | "Zap_gun" | "Cruiser";

export type Upgrade = "Teleporter" | "Inverse_Teleporter" | "Loud_horn" | "Signal_translator";

export const merchandicePrice = (name: Equipment | Upgrade) => {
  switch (name) {
    //Equipment
    case "Belt_bag":
      return 45;
    case "Boombox":
      return 60;
    case "Extension_ladder":
      return 60;
    case "Flashlight":
      return 15;
    case "Jetpack":
      return 900;
    case "Lockpicker":
      return 20;
    case "Pro-flashlight":
      return 25;
    case "Radar-booster":
      return 60;
    case "Shovel":
      return 30;
    case "Spray_paint":
      return 50;
    case "Stun_grenade":
      return 30;
    case "TZP-Inhalant":
      return 120;
    case "Walkie-talkie":
      return 12;
    case "Weed_killer":
      return 25
    case "Zap_gun":
      return 400;
    case "Cruiser":
      return 400;

    //Upgrade
    case "Teleporter":
      return 375;
    case "Inverse_Teleporter":
      return 425;
    case "Loud_horn":
      return 100;
    case "Signal_translator":
      return 255;

    default:
      return 0;
  }
}

export type MerchandiceInfo = {
  name: Equipment | Upgrade;
  price: number;
}