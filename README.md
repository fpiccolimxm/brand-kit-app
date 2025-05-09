# BrandKit App – Specifications

## Overview

BrandKit is a mobile application designed for artists and creatives looking to manage their visual identity. The app allows users to:
- Create and customise logos
- Build and save colour palettes
- Choose and save favourite fonts
All brand assets are organised into a personal kit.

## Features

### 1. Home Screen
- Displays a list of saved assets (logos, colour palettes, fonts).
- Each item shows:
  - **Title**: The name of the asset.
  - **Creation date and time**.
- Button to delete an asset.
- Button to navigate to the new asset creation screen.

### 2. Asset Creation
- **Real-time Preview**:
  - The selected image is displayed as the background.
  - The title is centred above the image with a semi-transparent background.
- **Customisation**:
  - Selection of an image (local or remote).
  - Choice of a text colour.
  - Choice of a font from the available options.
  - Input of a title.
- **Saving**:
  - Assets are saved locally using `AsyncStorage`.

### 3. Selectors
- **Image Selector**:
  - Shows a list of local images to choose from.
  - Highlights the selected image.
- **Colour Selector**:
  - Shows a list of predefined colours.
  - Highlights the selected colour.
- **Font Selector**:
  - Shows a list of available fonts.
  - Highlights the selected font.

### 4. Data Persistence
- All data (logos, colours, fonts) is saved locally on the device using `AsyncStorage`.

## Technical Requirements

- **Framework**: React Native (Expo)
- **Component Structure**: Functional components with hooks
- **Navigation**: React Navigation
- **Styling**: StyleSheet
- **Main Dependencies**:
  - `@react-native-async-storage/async-storage` for data persistence
  - `expo-font` for font loading
  - `react-native-vector-icons` for icons
  - `react-native-reanimated` for advanced animations

## User Flow

1. The user opens the app and lands on the Home screen.
2. The user can:
   - View saved assets.
   - Create a new asset.
3. During asset creation:
   - The user selects an image, a colour, a font, and enters a title.
   - The user sees a real-time preview.
   - The user saves the asset.
4. Saved assets are visible on the Home screen, where they can be deleted.

## Future Goals (Stretch Goals)
- Exporting the logo as PNG/SVG.
- Sharing assets via email or social media.
- Support for multiple brand kits.
- Cloud synchronisation.

---

**Note**: If you need any further details or translations, just let me know!