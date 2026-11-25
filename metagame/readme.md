# Die Verzauberten Inseln – Designstandards

Diese Richtlinien gelten für Heimatinsel, Abenteuerinseln, Cardbattler und zugehörige Minispiele. Bestehende Ansichten werden schrittweise daran angepasst.

## Visuelle Sprache
- Illustrierter Fantasy-Stil statt flacher SVG-Platzhalter oder Emojis, sofern passende eigene Grafiken existieren.
- Dunkles Petrol für UI-Flächen, Gold für Überschriften, Rahmen und aktive Navigation, helle Schrift; Grün für positive Zustände, Rot für Probleme.
- Vorhandene Grafiken aus images/icons wiederverwenden, insbesondere Hilfe, Inselrückkehr, Ressourcen und Minispiele.
- Spielwelten rahmenlos über die gesamte verfügbare Bildschirmfläche. Das Inselabenteuer ist die Designreferenz für Minispiel-HUDs: schwebende, leicht transparente Petrolfläche mit goldener Umrandung, integrierter Titelgrafik, Hilfe und Inselrückkehr sowie kompakten spielrelevanten Informationen. Quadratische Rätsel bleiben unterhalb des HUD vollständig sichtbar.
- Keine unnötigen verschachtelten Panels, Rahmen oder redundanten Überschriften.

## Navigation und Bedienelemente
- Hilfe oben rechts: direkt unter dem gesamten HUD als nichtmodales Overlay über dem Spielfeld aufklappen, ohne Spielfeld oder HUD zu verschieben oder zu verkleinern, erneut antippen zum Einklappen; aktives Symbol goldfarben, kein modales Popup, keine Abdunklung, kein zusätzlicher Schließen-Button.
- Aufklappbare Bereiche und eigene Dropdowns mit gefülltem Dreieck rechts; Richtung zeigt Zustand. Dropdowns im Fantasy-Stil mit vorhandenen Bildern statt nativer Systemoptik.
- Aktionen als einheitliche breite Buttons mit Bildsymbol links und Text; destruktive Aktionen rot kennzeichnen und in einem gestalteten Dialog bestätigen.
- Startaktionen bei fehlenden Ressourcen deaktivieren und fehlende Voraussetzungen darunter erklären.
- Erfolg und Ankunft als gestalteter mittiger Dialog mit eindeutigem Button „Zurück zur Insel“, nicht als Browser-Alert.

## Informationen
- Gebäudebild und Name, Stufe und Produktionsstatus direkt darunter. Status grün bei laufender Produktion, neutral bei Pause oder vollem Lager, rot bei fehlenden Voraussetzungen.
- Kapazität, Verbrauch und Produktion als getrennte kompakte Listen mit Ressourcensymbol, Anzahl und ausgeschriebenem Namen; bei Verbrauch/Produktion zusätzlich Stundenrate.
- Gesamteffizienz aufklappbar mit Umgebungseinfluss und Wegbonus. Keine redundanten Platzierungshinweise.
- Fortschrittsbalken goldfarben; graues Label links, verbleibende Zeit rechts.
- Expeditionsarten als aufklappbare Bereiche; Geologe vor Seeabenteuer. Nur notwendige Informationen anzeigen.

## Abenteuer-Einstellungen
- Söldner und Seeabenteuer merken sich Gebiet und Deck unabhängig voneinander im lokalen Browser. Auswahl, Vorschau, Kosten und gestartetes Abenteuer müssen übereinstimmen. Laufende Abenteuer bleiben unverändert.
- Die bisherige Option „Mein gespeichertes Deck“ bleibt bis zur Erprobung der automatischen Speicherung erhalten.

## Minispiele
Siehe [Minispielkonventionen](games/README.md). Mobile Hochformatansicht (Android/Firefox) zuerst prüfen. Hilfe und UI-Änderungen dürfen keinen Spielfortschritt zurücksetzen.

## Repository
Änderungen ausschließlich auf separaten Branches; zusammengehörige Änderungen einschließlich Versionsanpassungen in einem Pull Request bündeln. Nicht direkt auf main committen und Pull Requests nicht eigenständig mergen.
