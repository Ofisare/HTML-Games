# Unsere Spielewelt 🎮

Eine kleine, mobilfreundliche Sammlung von HTML5-Spielen. Kein Server-Code, keine externen Bibliotheken.

## GitHub Pages einrichten

1. Die **Inhalte dieses Ordners** ins Stammverzeichnis des GitHub-Repositories hochladen (nicht den übergeordneten Ordner als Unterordner).
2. Unter **Settings → Pages** bei **Build and deployment** die Quelle **Deploy from a branch** auswählen.
3. Branch **main** und Ordner **/(root)** auswählen und speichern.
4. Nach der Veröffentlichung erscheint die Website unter `https://BENUTZERNAME.github.io/REPOSITORYNAME/` (oder bei einem Repository namens `BENUTZERNAME.github.io` unter `https://BENUTZERNAME.github.io/`).

## Struktur

- `index.html`: Startseite mit Spielekacheln
- `games/*.html`: verschiedene Spiele
- `favicon.svg`: kleines Website-Symbol

## Weitere Spiele ergänzen

Eine weitere HTML-Datei in `games/` speichern und auf der Startseite (`index.html`) eine zusätzliche verlinkte Kachel ergänzen. Die beiden ausgegrauten Kacheln sind nur Platzhalter.

## Spielstände

Bottle Filling speichert den Fortschritt über `localStorage` des Browsers. Die Daten bleiben bei derselben GitHub-Pages-Adresse und demselben Browserprofil normalerweise erhalten. Sie werden **nicht** über GitHub, OneDrive oder andere Geräte synchronisiert. Privater Modus, Löschen der Website-Daten oder eine andere Website-Adresse können den Fortschritt entfernen.

**Hinweis:** Wer von einer lokalen Datei oder OneDrive-Vorschau zur GitHub-Pages-Seite wechselt, übernimmt den bisherigen Spielstand nicht automatisch.

## Layout- und Bedienstandards (alle Spiele)

Diese Regeln gelten für neue Spiele und für die schrittweise Modernisierung bestehender Spiele. **Mobile Hochformatansicht (insbesondere Android/Firefox) zuerst**, anschließend Querformat und Desktop prüfen.

### Bildschirm und Größen

- Interaktive Spielansichten möglichst innerhalb von `100dvh` halten; `100vh` als Fallback verwenden. Browserleisten und Safe Areas berücksichtigen.
- Für Hauptansichten Flexbox oder CSS Grid nutzen: Kopfbereich, Spielkarten und Aktionen erhalten definierte bzw. begrenzte Größen; **nur geeignete Spielflächen oder Meldungsbereiche** dürfen flexibel wachsen.
- Abstände **nicht** mit `justify-content: space-between` über die gesamte freie Höhe verteilen: Das erzeugt auf großen Displays übermäßige Lücken. Stattdessen `gap: clamp(MIN, Xdvh, MAX)` und ebenfalls begrenzte Margins einsetzen.
- Gleiche Abstände über gemeinsame CSS-Variablen steuern, z. B. `--game-gap: clamp(3px, .6dvh, 8px)`. Symmetrische Abstände nutzen dieselbe Variable.
- Für Karten und Einheiten feste bzw. mit `clamp()` begrenzte Höhen verwenden. Inhalte müssen innerhalb bleiben; Statussymbole dürfen Karten nicht vergrößern. Bei Einheiten: **Symbol / Name / Status** in drei Zeilen.
- Auf sehr kleinen Displays Kompaktwerte per `@media (max-height: ...)` vorsehen. Keine Bedienelemente unter dem sichtbaren Fensterrand verstecken.

### Interaktion und Informationen

- Touch-Ziele ausreichend groß und eindeutig; ausgewählte und anklickbare Ziele sichtbar hervorheben.
- Meldungen und Animationen dürfen die Position von Spielfeld, Karten und Buttons nicht verschieben. Längere Texte **innerhalb** ihres Bereichs scrollen lassen.
- Hilfe über das Hilfesymbol direkt unter dem Header auf- und zuklappen; als nichtmodales Overlay über dem Spielfeld, ohne dessen Größe oder Position zu ändern; kein modales Hilfe-Popup. Lange Hilfeinhalte separat scrollen lassen.
- Auf kleinen Bildschirmen zuerst überflüssige Abstände reduzieren, nicht wichtige Bedienelemente entfernen.
- Keine horizontalen Überläufe für Hauptlayout und Aktionsbuttons; horizontal scrollbare Kartenhand ist ausdrücklich erlaubt.
- Bestehende Spiellogik, Spielstände und die Offline-Funktion beim Layoutumbau unverändert lassen.

### CSS-Grundmuster

```css
.game-view {
  height: 100vh;       /* Fallback */
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: var(--game-gap);
  overflow: hidden;
  --game-gap: clamp(3px, .6dvh, 8px);
}
.game-header, .game-actions, .game-cards { flex: 0 0 auto; }
.game-playfield { position: relative; flex: 1 1 auto; min-height: 0; overflow: auto; }
.game-help { position: absolute; top: 0; left: 0; right: 0; z-index: 5; max-height: 40dvh; overflow-y: auto; }
```

Dieses Muster ist eine **Richtlinie**, kein Zwang zu identischen Höhen: Je nach Spiel kann die Spielfläche statt eines Meldungsbereichs flexibel sein. Bei begrenzter Inhaltshöhe freie Fläche nicht künstlich mit `space-between` aufblähen.

### Testcheckliste

- Android Firefox im Hochformat: alle Hauptaktionen sichtbar und erreichbar?
- Querformat und Desktop: keine abgeschnittenen Karten oder Buttons?
- Lange Namen, viele Statussymbole und mehrzeilige Meldungen: kein Layoutsprung?
- Hilfe öffnen/schließen: kein Neustart oder Verlust des Spielfortschritts?
- Spielstand und Spielmechanik nach der Änderung unverändert?

Fantasy-spezifische Gestaltung: [Designstandards der Verzauberten Inseln](metagame/readme.md).
