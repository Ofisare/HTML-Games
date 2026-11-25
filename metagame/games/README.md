# Fantasy-Inseln – Konventionen für Minispiele

Diese Regeln gelten für **alle bestehenden und zukünftigen Minispiele** unter `metagame/games/`. Ziel ist eine einheitliche, gut verständliche Bedienung, insbesondere auf Android/Firefox.

## Einheitlicher Spielablauf

1. **Hilfe:** Oben rechts befindet sich das vorhandene illustrierte Hilfesymbol. Es klappt die Spielanleitung direkt unter dem HUD als nichtmodales Overlay über dem Spielfeld auf und zu, ohne dessen Größe oder Position zu ändern, ohne modales Popup, Abdunklung oder zusätzlichen Schließen-Button. Bei geöffneter Hilfe ist das Symbol goldfarben hinterlegt. Die zuletzt gewählte Sichtbarkeit wird dauerhaft gespeichert (z. B. per `localStorage`, mit einem eigenen Schlüssel je Minispiel).
2. **Während der Runde:** Ein gut sichtbarer **„Abbrechen“ / „Zurück zur Insel“**-Button führt zum Inselspiel zurück. Beim Abbrechen gibt es **keine unverdiente Belohnung**. Bereits ausdrücklich gewährte Teilfortschritte (z. B. Bauzeitersparnis beim Bauhelfer) bleiben bestehen.
3. **Bei Erfolg:** Ein **modaler Erfolgsdialog mittig über dem Spielfeld** erscheint, statt eines bloßen Erfolgsbereichs unter dem Spielfeld. Er enthält eine klare Erfolgsmeldung, gegebenenfalls die Belohnung und einen eindeutigen Button **„Zurück zur Insel“** mit vorhandenem Inselrückkehrsymbol.
4. **Belohnungen:** Nur einmal pro erfolgreich abgeschlossener Runde gutschreiben; bestehende Lagergrenzen und den gemeinsamen Spielstand beachten. Die Beschriftung soll klar machen, ob die Gutschrift bereits erfolgt ist oder erst beim Zurückkehren erfolgt.
5. **Neustart:** Wenn ein Minispiel einen Neustart anbietet, soll dessen Verhalten eindeutig sein (gleiches Rätsel oder neues Rätsel). Keine unnötigen zusätzlichen Bedienelemente.

## Technische Integration

- Die Insel befindet sich unter `metagame/index.html`; Minispiele unter `metagame/games/`.
- Gemeinsamen Spielstand und vorhandene Schlüssel/Versionen kompatibel halten; vorhandene Spielstände nicht versehentlich zurücksetzen.
- Touch-Bedienung auf Android/Firefox mitdenken: ausreichend große Schaltflächen, keine ausschließlich per Hover erreichbaren Aktionen.
- **Bestehende eigenständige Spiele unter `games/` nicht verändern**, wenn eine Mechanik in ein Insel-Minispiel übernommen wird.
- Änderungen an Minispielen sollten den oben beschriebenen Ablauf nicht unbeabsichtigt aufbrechen.

## Derzeitige Minispiele

| Datei | Funktion | Erfolgsbedingung |
| --- | --- | --- |
| `holzfaellen.html` | Waldarbeiter-Logikrätsel | Alle Bäume fällen, zur Hütte zurückkehren |
| `steinbruch.html` | Minesweeper-artiger Stollen | Stollen sicher aufdecken; Steinbelohnung |
| `saegewerk.html` | Shikaku: Holzbrett in Rechtecke mit genau einer Flächenzahl aufteilen | Vollständig gültiger Zuschnitt; Bretter fürs Insellager |
| `bauhelfer.html` | Block-Puzzle | Bauzeit durch vervollständigte Reihen/Spalten verkürzen, bis Bau abgeschlossen ist |

## Checkliste vor Veröffentlichung

- [ ] Hilfesymbol oben rechts klappt Hilfe direkt unter dem HUD auf und zu; Zustand bleibt nach erneutem Öffnen erhalten.
- [ ] Abbrechen führt ohne unverdiente Belohnung zur Insel zurück.
- [ ] Erfolg öffnet ein mittiges Popup mit eindeutiger Rückkehr-Schaltfläche.
- [ ] Belohnungen/Teilfortschritte werden nicht doppelt vergeben.
- [ ] Gemeinsamer Spielstand bleibt kompatibel.
- [ ] JavaScript-Syntax prüfen und möglichst auf Android/Firefox testen.


## Bauernhof – Bewässerung (Numberlink)

- Datei: `bauernhof.html`; Aufruf im Info-Tab von Bauernhof **und Getreidefeld**, außerdem durch Doppeltippen auf ein Getreidefeld.
- Jeweils zwei gleichfarbige Anschlüsse mit durchgehenden, nicht kreuzenden Wegen verbinden; alle Felder müssen abgedeckt werden.
- Nach erfolgreichen Aufträgen wächst das Spielfeld von 5×5 auf höchstens 8×8, mit 4–8 Leitungspaaren.
- Erfolgsbelohnung: 3–7 Nahrung, begrenzt durch die Lagerkapazität; Erfolg wird im Inselspielstand als `farmWins` gespeichert.
- Allgemeiner Minispielstandard: gespeicherte ❓-Hilfe, Abbrechen ohne Belohnung, mittiges Erfolgspopup mit Rückkehr zur Insel.

## Brunnen und Bewässerung (Numberlink)

- Das Numberlink-Spiel `brunnen.html` gehört zum Brunnen (Info-Tab), nicht mehr zum Bauernhof oder Getreidefeld.
- Brunnen produzieren Wasser, Bauernhöfe verbrauchen Wasser für Nahrung; Getreidefelder erhöhen die Effizienz.
- Numberlink zeigt gleich hohe Zeilen und kennzeichnet verbundene Endpunkte mit einem Häkchen.
- Erfolgsbelohnung ist Wasser; Erfolge werden unter `wellWins` gespeichert.

## Bauernhof – Jahreszeiten-Ernte

- Datei: `bauernhof.html`, im Info-Tab des Bauernhofs aufrufbar. Das Numberlink-Spiel bleibt beim Brunnen.
- 6×6-Feld, 12 Züge, drei pro Jahreszeit. Gleichartige Pflanzen ab drei Feldern verbinden; diagonale Nachbarschaft erlaubt.
- Pflanzen rutschen nach unten; neue Pflanzen erscheinen in der neuen Jahreszeit, ältere behalten ihre Jahreszeitenoptik.
- Bäume mit konstanter Wahrscheinlichkeit; Gras und Getreide saisonal gewichtet.
- Ernteziel und Belohnung steigen mit erfolgreichen Aufträgen. Gespeicherter Zähler `farmWins`.
- ❓-Hilfe, Abbrechen ohne Belohnung, Erfolgspopup mit Rückkehr zur Insel.

Jahreszeiten-Ernte: Doppeltipp auf Getreidefeld startet das Bauernhofspiel. Geerntete Pflanzen rutschen animiert nach; neu nachfallende Pflanzen behalten ihre jeweilige Jahreszeitenoptik.


## Geologe – Tiefengrabung (`geologe.html`)
- Im Bau-Tab bei einer laufenden Expedition über „Grabungsspiel starten“ öffnen.
- 8×8 Match-3, Tausch horizontal/vertikal, Animationen für Tausch, Entfernen, Fall und Schichtwechsel.
- Keine neuen Materialien von oben; vollständige leere oberste Reihen werden durch neue Tiefenschichten von unten ersetzt.
- Pro abgebaute Reihe werden 5 Sekunden von `geology.active.endsAt` abgezogen und sofort im Spielstand gespeichert.
- Falls keine Kombination möglich ist, verschiebt sich das Board um vier Spalten seitlich, ohne die Tiefe zu ändern.
- Tiefenabhängige Materialien, Spezialsteine und Kettenreaktionen. Hilfe oben rechts, Abbrechen ohne Strafe, Erfolgspopup nach Expeditionsende.


### Geologen-Expeditionen – Kohle und farbige Gesteine
- Fundarten in Reihenfolge: Stein (grau, 5 Nahrung, 10 Minuten), Kohle (dunkel, 8 Nahrung, 20 Minuten), Erz (blau, 15 Nahrung, 40 Minuten), Gold (goldfarben, 25 Nahrung, 80 Minuten).
- Alle Vorkommen verwenden dieselbe gezeichnete Gesteinsform, mit materialspezifischer Farbe. Funde werden im Bau-Tab als Kacheln platziert.
- Kohle wird in `coalDeposits` und `geology.inventory.coal` gespeichert; ältere Spielstände werden automatisch ergänzt.
- Das Geologen-Match-3 führt Kohle in mittleren Tiefen ein und verschiebt Erz/Gold in tiefere Schichten.

## Gestaltung

Die [gemeinsamen Fantasy-Designstandards](../readme.md) gelten auch hier. Erfolgsdialoge verwenden dunkles Petrol, goldene Rahmen, vorhandene Illustrationen und einen breiten Rückkehrbutton. Das Inselabenteuer ist die HUD-Designreferenz: Titel, Hilfe, Rückkehr und Spielinformationen in einer schwebenden goldgerahmten Petrolfläche. Die Hilfe schließt direkt darunter an, ohne Layoutänderung. Bei frei scrollenden Spielwelten (z. B. Kurs halten) liegt das HUD über der vollflächigen Spielwelt; bei Rasterrätseln bleibt das gesamte Raster darunter sichtbar. Fortschrittsbalken verwenden den grünen Verlauf mit Goldrahmen des Inselabenteuers. Wasser, Küsten, Hindernisse und Wind bewegen sich mit gemeinsamer Weltgeschwindigkeit; Spawnpositionen müssen frei von Küsten sein. Bereits erspielte Zeitersparnis bleibt beim Verlassen erhalten.

## Holzfäller – Grafik
- Wald-Tiles, Tannen, Felsen, Holzressource und Holzfällerhütte aus den vorhandenen Insel-Assets wiederverwenden. Spielfigur: `images/characters/lumberjack.png` (transparentes PNG, relativ zu `metagame/`). Raster und Fallrichtungen bleiben sichtbar. Kein Neustartbutton. Spielhinweise stehen in der Hilfe; nur situative Fehlermeldungen erscheinen kurz über dem Spielfeld. Schwebendes HUD nach Vorbild des Inselabenteuers mit Holzfortschrittsbalken und Zugzähler, Walduntergrund über die gesamte Bildschirmfläche, 7×8-Raster mit quadratischen Feldern und sichtbarem unteren Waldrand. Erfolgsdialog mit Figurenillustration, hervorgehobener Holzbelohnung und den Aktionen „Noch eine Runde“ und „Zurück zur Insel“.

- Die Umgebung außerhalb des Holzfäller-Rasters verwendet `images/tiles/waldlichtung_v2.jpg` als vollflächige, nicht wiederholte Illustration aus erhöhter Perspektive. Raster-Tiles bleiben unverändert; Hintergrund und Spielfeld müssen klar unterscheidbar bleiben. Die gemeinsame Felsgrafik `images/tiles/felsen.png` benötigt einen sauber freigestellten Alphakanal.

- Tannen (2), Laubbäume (3) und Kiefern (4) benötigen entsprechend viele freie Felder in Fallrichtung. Stämme bleiben dauerhaft liegen und blockieren Wege; die ehemalige Baumzelle wird frei. Holz zählt beim Fällen, Lagergutschrift erst nach Rückkehr. Fünf Bäume ergeben 12 Holz, begrenzt durch Lagerkapazität. Generator akzeptiert nur per Suchverfahren bestätigte Rätsel. Undo im HUD (`images/icons/undo.png`) nimmt Bewegung oder Fällen inklusive Fortschritt zurück. Stammgrafiken `stamm_2.png` bis `stamm_4.png` werden gedreht.
