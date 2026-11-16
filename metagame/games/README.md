# Fantasy-Inseln – Konventionen für Minispiele

Diese Regeln gelten für **alle bestehenden und zukünftigen Minispiele** unter `metagame/games/`. Ziel ist eine einheitliche, gut verständliche Bedienung, insbesondere auf Android/Firefox.

## Einheitlicher Spielablauf

1. **Hilfe (❓):** Oben rechts befindet sich ein Fragezeichen-Button. Er blendet die Spielanleitung ein und aus. Die zuletzt gewählte Sichtbarkeit wird dauerhaft gespeichert (z. B. per `localStorage`, mit einem eigenen Schlüssel je Minispiel).
2. **Während der Runde:** Ein gut sichtbarer **„Abbrechen“ / „Zurück zur Insel“**-Button führt zum Inselspiel zurück. Beim Abbrechen gibt es **keine unverdiente Belohnung**. Bereits ausdrücklich gewährte Teilfortschritte (z. B. Bauzeitersparnis beim Bauhelfer) bleiben bestehen.
3. **Bei Erfolg:** Ein **modaler Erfolgsdialog mittig über dem Spielfeld** erscheint, statt eines bloßen Erfolgsbereichs unter dem Spielfeld. Er enthält eine klare Erfolgsmeldung, gegebenenfalls die Belohnung und einen eindeutigen Button **„🏝️ Zurück zur Insel“**.
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
| `holzfaellen.html` | Waldarbeiter-Logikrätsel | Bäume fällen, Holz einsammeln, zur Hütte zurückkehren |
| `steinbruch.html` | Minesweeper-artiger Stollen | Stollen sicher aufdecken; Steinbelohnung |
| `saegewerk.html` | Shikaku: Holzbrett in Rechtecke mit genau einer Flächenzahl aufteilen | Vollständig gültiger Zuschnitt; Bretter fürs Insellager |
| `bauhelfer.html` | Block-Puzzle | Bauzeit durch vervollständigte Reihen/Spalten verkürzen, bis Bau abgeschlossen ist |

## Checkliste vor Veröffentlichung

- [ ] ❓ oben rechts klappt Hilfe auf und zu; Zustand bleibt nach erneutem Öffnen erhalten.
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
