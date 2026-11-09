# Unsere Spielewelt 🎮

Eine kleine, mobilfreundliche Sammlung von HTML5-Spielen. Kein Server-Code, keine externen Bibliotheken.

## GitHub Pages einrichten

1. Die **Inhalte dieses Ordners** ins Stammverzeichnis des GitHub-Repositories hochladen (nicht den übergeordneten Ordner als Unterordner).
2. Unter **Settings → Pages** bei **Build and deployment** die Quelle **Deploy from a branch** auswählen.
3. Branch **main** und Ordner **/(root)** auswählen und speichern.
4. Nach der Veröffentlichung erscheint die Website unter `https://BENUTZERNAME.github.io/REPOSITORYNAME/` (oder bei einem Repository namens `BENUTZERNAME.github.io` unter `https://BENUTZERNAME.github.io/`).

## Struktur

- `index.html`: Startseite mit Spielekacheln
- `games/bottle-filling.html`: Bottle Filling Game (bestehende Version mit Solver)
- `favicon.svg`: kleines Website-Symbol

## Weitere Spiele ergänzen

Eine weitere HTML-Datei in `games/` speichern und auf der Startseite (`index.html`) eine zusätzliche verlinkte Kachel ergänzen. Die beiden ausgegrauten Kacheln sind nur Platzhalter.

## Spielstände

Bottle Filling speichert den Fortschritt über `localStorage` des Browsers. Die Daten bleiben bei derselben GitHub-Pages-Adresse und demselben Browserprofil normalerweise erhalten. Sie werden **nicht** über GitHub, OneDrive oder andere Geräte synchronisiert. Privater Modus, Löschen der Website-Daten oder eine andere Website-Adresse können den Fortschritt entfernen.

**Hinweis:** Wer von einer lokalen Datei oder OneDrive-Vorschau zur GitHub-Pages-Seite wechselt, übernimmt den bisherigen Spielstand nicht automatisch.
