# BrandKit App – Specifications

## Overview

BrandKit is a mobile app for artists and creatives to manage their brand identity. The app allows users to:
- Create and customize logos
- Build and save color palettes
- Choose and save preferred fonts
All brand assets are organized in a personal brand kit.

## Features

### 1. Home Screen
- Navigation to: Logo Editor, Color Palette Manager, Font Picker, and Brand Kit summary
- Display of last saved logo, palette, and font

### 2. Logo Editor
- Input: Brand name (text)
- Select font (from saved or default list)
- Select color (from palette or color picker)
- Optionally add an icon (from a built-in icon library)
- Preview logo in real time
- Save logo to Brand Kit

### 3. Color Palette Manager
- Add colors using a color picker
- Display palette as a row of color swatches
- Remove colors from the palette
- Save palette to Brand Kit

### 4. Font Picker
- Browse a list of available fonts (system fonts or Google Fonts)
- Preview sample text in each font
- Select and save preferred font(s) to Brand Kit

### 5. Brand Kit
- View all saved brand assets: logos, palettes, fonts
- Option to edit or delete each asset

### 6. Data Persistence
- All user data (logos, palettes, fonts) must be saved locally on the device (use AsyncStorage or similar)

## Technical Requirements

- **Framework:** React Native (Expo)
- **Component structure:** Use functional components and hooks
- **Navigation:** Simple state management (no navigation library needed for MVP)
- **Styling:** Use StyleSheet or styled-components
- **Dependencies:**  
  - `react-native-color-picker` for color selection  
  - `expo-font` for font loading (optional)
  - `react-native-svg` for logo rendering (optional)
  - `@react-native-async-storage/async-storage` for data persistence

## Stretch Goals (Optional)
- Export logo as PNG/SVG
- Share brand assets via email or social media
- Support for multiple brand kits
- Cloud sync (future)

## User Flow

1. User opens app and lands on Home Screen
2. User navigates to create a logo, build a palette, or pick a font
3. User saves each asset to their Brand Kit
4. User can view, edit, or delete assets from the Brand Kit

---

**End of specification.**

You can copy-paste this into your repository. If you want it in Italian or need further details, let me know!