# Gantt

Di seguito è riportato il diagramma di Gantt per il progetto, che mostra le attività principali,
le loro dipendenze e le tempistiche previste per ciascuna fase dello sviluppo del videogioco.
Le attività sono suddivise in sezioni tematiche e sono indicate le milestone principali.

```mermaid
gantt
    title Piano di sviluppo videogioco
    dateFormat YYYY-MM-DD
    section Prototipazione
        1.1.1 Base Meccaniche Roguelite: prot1, 2025-01-01, 60d
        1.1.2 Base Meccaniche Action: prot2, after prot1, 60d
        1.1.3 Base Meccaniche RPG: prot3, after prot1, 60d
        1.1.4 Mockup UI: prot4, after prot1, 45d
        1.1.5 Documentazione Progetto: prot5, after prot4, 30d
        1.1.6 Preparazione per Bandi: prot6, after prot5, 20d
        Milestone MS1: Prototipo pronto per bandi :milestone1, after prot6, 0d

    section Narrativa
        2.1 Trama: narr1, 2025-10-03, 45d
        2.2 Ambientazione: narr2, after narr1, 45d
        2.3 Personaggi: narr3, after narr2, 45d
        2.4 Missioni: narr4, after narr3, 30d
        2.5 Dialoghi: narr5, after narr4, 30d
        2.6 Localizzazione: narr6, after narr5, 30d
        Milestone MS3: Narrativa completa :milestone3, after narr6, 0d

    section Meccaniche Roguelite
        3.1 Mappe Procedurali: rog1, 2026-05-16, 60d
        3.2 Hub e Sbloccaggi: rog2, after rog1, 60d
        3.3 Salvataggi: rog3, after rog2, 30d
        3.4 Permadeath: rog4, after rog3, 30d
        3.5 Progressione e Miglioramenti: rog5, after rog4, 30d
        3.6 Sistemi di simulazione: rog6, after rog5, 30d

    section Meccaniche Action
        4.1 Combattimento completo: act1, 2027-01-11, 60d
        4.2 Nemici: act2, after act1, 45d
        4.3 Boss e Pattern: act3, after act2, 30d

    section Meccaniche RPG
        5.1 Progressione Personaggio: rpg1, 2027-05-26, 45d
        5.2 Equipaggiamento: rpg2, after rpg1, 45d
        5.3 Dialoghi a Scelta: rpg3, after rpg2, 30d
        5.4 Albero Abilità: rpg4, after rpg3, 30d

    section UI
        6.1 HUD: ui1, 2027-10-23, 30d
        6.2 Menu: ui2, after ui1, 30d
        6.3 UX: ui3, after ui2, 30d

    section Marketing
        7.1 Ricerca PR: mkt1, 2028-01-21, 30d
        7.2 Sito Web: mkt2, after mkt1, 30d
        7.3 Social Media: mkt3, after mkt2, 30d

    section Finalizzazione
        8.1 Bilanciamento: fin1, 2028-04-20, 60d
        8.2 Localizzazione finale: fin2, after fin1, 45d
        8.3 Distribuzione Steam: fin3, after fin2, 30d
        8.4 QA e Playtest: fin4, after fin3, 15d
        Milestone MS5: Pronto per lancio :milestone5, after fin4, 0d
```

Di seguito sono riportate le milestone principali del progetto:

```mermaid
timeline
    title Timeline delle milestone
    2025-01-01 : Milestone1
    2025-10-03 : milestone2
    2026-05-16 : milestone3
    2027-01-11 : milestone4
    2027-05-26 : milestone5
    2027-10-23 : milestone6
    2028-01-21 : milestone7
    2028-04-20 : milestone8
    
```

| Fase                  | Inizio      | Fine        | Durata (giorni) | Durata (mesi) |
|-----------------------|-------------|-------------|-----------------|---------------|
| **1. Prototipazione** | 1 Gen 2025  | 3 Ott 2025  | 275             | 9.2           |
| **2. Narrativa**      | 3 Ott 2025  | 16 Mag 2026 | 225             | 7.5           |
| **3. Roguelite**      | 16 Mag 2026 | 11 Gen 2027 | 240             | 8.0           |
| **4. Action**         | 11 Gen 2027 | 26 Mag 2027 | 135             | 4.5           |
| **5. RPG**            | 26 Mag 2027 | 23 Ott 2027 | 150             | 5.0           |
| **6. UI**             | 23 Ott 2027 | 21 Gen 2028 | 90              | 3.0           |
| **7. Marketing**      | 21 Gen 2028 | 20 Apr 2028 | 90              | 3.0           |
| **8. Finalizzazione** | 20 Apr 2028 | 17 Set 2028 | 150             | 5.0           |
