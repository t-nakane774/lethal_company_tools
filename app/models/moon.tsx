export type Moon = "Experimentation" | "Assurance" | "Vow" | "Offense" | "March" | "Adamance" | "Free"
              | "Rend" | "Dine" | "Titan" | "Artifice" | "Embrion";

export const moonPrice = (name: Moon) => {
  switch (name) {
    case "Rend":
      return 550;
    case "Dine":
      return 600;
    case "Titan":
      return 700;
    case "Artifice":
      return 1500;
    case "Embrion":
      return 150;
    default:
      return 0;
  }
}

export type TravelInfo = {
  moon: Moon;
  price: number;
}