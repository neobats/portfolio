import { FontVariation } from "FontVariation";

export const explodeFontSettings = (settings: FontVariation) =>
  Object.keys(settings).map((key) => `'${key}' ${settings[key]} `).join(', ')