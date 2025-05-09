# BrandKit App – Specifiche

## Panoramica

BrandKit è un'app mobile progettata per artisti e creativi che desiderano gestire la propria identità visiva. L'app consente agli utenti di:
- Creare e personalizzare loghi
- Costruire e salvare palette di colori
- Scegliere e salvare font preferiti
Tutti gli asset del brand sono organizzati in un kit personale.

## Funzionalità

### 1. Schermata Home
- Visualizza una lista di asset salvati (loghi, palette di colori, font).
- Ogni elemento mostra:
  - **Titolo**: Il nome dell'asset.
  - **Data e ora di creazione**.
- Pulsante per eliminare un asset.
- Pulsante per accedere alla schermata di creazione di un nuovo asset.

### 2. Creazione di un Asset
- **Anteprima in tempo reale**:
  - L'immagine selezionata viene mostrata come sfondo.
  - Il titolo è centrato sopra l'immagine con uno sfondo semi-trasparente.
- **Personalizzazione**:
  - Selezione di un'immagine (locale o remota).
  - Scelta di un colore per il testo.
  - Scelta di un font tra quelli disponibili.
  - Inserimento di un titolo.
- **Salvataggio**:
  - Gli asset vengono salvati localmente utilizzando `AsyncStorage`.

### 3. Selettori
- **Selettore di immagini**:
  - Mostra una lista di immagini locali tra cui scegliere.
  - Evidenzia l'immagine selezionata.
- **Selettore di colori**:
  - Mostra una lista di colori predefiniti.
  - Evidenzia il colore selezionato.
- **Selettore di font**:
  - Mostra una lista di font disponibili.
  - Evidenzia il font selezionato.

### 4. Persistenza dei dati
- Tutti i dati (loghi, colori, font) vengono salvati localmente sul dispositivo utilizzando `AsyncStorage`.

## Requisiti tecnici

- **Framework**: React Native (Expo)
- **Struttura dei componenti**: Componenti funzionali con hook
- **Navigazione**: React Navigation
- **Stile**: StyleSheet
- **Dipendenze principali**:
  - `@react-native-async-storage/async-storage` per la persistenza dei dati
  - `expo-font` per il caricamento dei font
  - `react-native-vector-icons` per le icone
  - `react-native-reanimated` per animazioni avanzate

## Flusso utente

1. L'utente apre l'app e atterra sulla schermata Home.
2. L'utente può:
   - Visualizzare gli asset salvati.
   - Creare un nuovo asset.
3. Durante la creazione di un asset:
   - L'utente seleziona un'immagine, un colore, un font e inserisce un titolo.
   - L'utente visualizza un'anteprima in tempo reale.
   - L'utente salva l'asset.
4. Gli asset salvati sono visibili nella schermata Home, dove possono essere eliminati.

## Obiettivi futuri (Stretch Goals)
- Esportazione del logo come PNG/SVG.
- Condivisione degli asset tramite email o social media.
- Supporto per più kit di brand.
- Sincronizzazione cloud.

---

**Nota**: Se hai bisogno di ulteriori dettagli o traduzioni, fammi sapere!