// This file exports TypeScript interfaces and types used throughout the application.

export interface BrandAsset {
    id: string;
    name: string;
}

export interface Logo extends BrandAsset {
    brandName: string;
    font: string;
    color: string;
    icon?: string; // Optional icon
}

export interface ColorPalette extends BrandAsset {
    colors: string[]; // Array of color hex codes
}

export interface Font extends BrandAsset {
    fontFamily: string;
}

export interface BrandKit {
    logos: Logo[];
    colorPalettes: ColorPalette[];
    fonts: Font[];
}
export interface Asset {
    id: string;
    logo: string; // URL o percorso del logo
    color: string; // Codice colore (es. #FFFFFF)
    font: string; // Nome del font
    title: string; // Titolo dell'asset
  }