type Color = string

export enum ColorAdjustParas { 
    lighten = "lighten",
    darken = "darken",
    accent = "accent"
}

export const I_CardColors: Color[] = [
    "red",
    "pink",
    "purple",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "green",
    "yellow",
    "orange",
    "brown"
]

export function alterColors(para: ColorAdjustParas = ColorAdjustParas.lighten, lvl: number = 5): Color[] {
    return I_CardColors.map((color) => color + "-" + para + "-" + lvl)
}

export function randomColor(colors: Color[]): { color: Color, remainingColors: Color[] } {
    if (colors.length === 0) return {color: 'Not a color!', remainingColors: []}
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    const remainingColors = colors.filter((color, index) => index !== randomIndex);
    return {
      color: selectedColor,
      remainingColors
    };
  }