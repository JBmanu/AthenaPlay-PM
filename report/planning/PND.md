# Project network diagram

Data la complessità del progetto e la sua natura iterativa, è stato scelto di utilizzare un
Project Network Diagram (PND) per rappresentare solo le attività critiche del progetto e le 
loro dipendenze.
Sono stati definiti le varie milestone del progetto, che rappresentano i punti di controllo
e le fasi chiave del progetto. Le milestone sono state identificate in base agli obiettivi 
principali del progetto e alle attività critiche che devono essere completate per 
raggiungere tali obiettivi. Le milestone principali includono:
- **MS1**: Prototipo pronto per bandi
- **MS2**: Feature complete
- **MS3**: Narrativa completa
- **MS4**: Pronto per playtest
- **MS5**: Pronto per lancio

Inoltre le milestone serviranno per tenere traccia dello stato di avanzamento del 
progetto e per realizzare più facilmente il Gantt Chart.


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


```mermaid
graph LR

%% === FASE 1: PROTOTIPO PER BANDI ===
    START((Inizio))
    PROT[Prototipo Base]
    PROT_Roguelite[Base Meccaniche Roguelite]
    PROT_Action[Base Meccaniche Action]
    PROT_RPG[Base Meccaniche RPG]
    PROT_UI[Mockup UI]
    PROT_DOC[Documentazione Progetto]
    PROT_PRESENT[Preparazione per Bandi]
    MS1((MS1: Prototipo pronto per bandi))
    START --> PROT
    PROT --> PROT_Roguelite
    PROT --> PROT_Action
    PROT --> PROT_RPG
    PROT --> PROT_UI
    PROT --> PROT_DOC
    PROT_DOC --> PROT_PRESENT --> MS1
%% === FASE 2: SVILUPPO COMPLETO ===
    DEV[Full Development]
    DEV --> NARR[Narrativa]
    DEV --> ROG[Meccaniche Roguelite]
    DEV --> ACT[Meccaniche Action]
    DEV --> RPG[Meccaniche RPG]
    DEV --> UI[UI completa]
    DEV --> MK[Marketing Prep]
    NARR --> NARR_TRAMA[Trama]
    NARR --> NARR_AMB[Ambientazione]
    NARR --> NARR_PG[Personaggi]
    NARR --> NARR_MISS[Missioni]
    NARR --> NARR_DLG[Dialoghi]
    NARR --> NARR_LOC[Localizzazione]
    NARR_LOC --> MS3((MS3: Narrativa completa))
    ROG --> ROG_MAP[Mappe Procedurali]
    ROG --> ROG_HUB[Hub e Sbloccaggi]
    ROG --> ROG_SAVE[Salvataggi]
    ROG --> ROG_PERMA[Permadeath]
    ROG --> ROG_UPGR[Progressione e Miglioramenti]
    ROG --> ROG_SIM[Sistemi di simulazione]
    ACT --> ACT_COMBAT[Combattimento completo]
    ACT --> ACT_NEMICI[Nemici]
    ACT --> ACT_BOSS[Boss]
    ACT --> ACT_PATTERN[Pattern Attacco]
    RPG --> RPG_PROG[Progressione Personaggio]
    RPG --> RPG_EQ[Equipaggiamento]
    RPG --> RPG_SKILL[Albero Abilità]
    RPG --> RPG_SCELTE[Dialoghi a scelta]
    UI --> UI_HUD[HUD]
    UI --> UI_MENU[Menu]
    UI --> UI_UX[Esperienza Utente]
    MK --> MK_PR[Ricerca PR]
    MK --> MK_SITO[Sito Web]
    MK --> MK_SOC[Social Media]
    DEV --> MS2((MS2: Feature complete))
%% === FASE 3: FINALIZZAZIONE ===
    FINAL[Finalizzazione e Lancio]
    FINAL --> BAL[Bilanciamento]
    FINAL --> LOC[Localizzazione]
    FINAL --> DIST[Distribuzione-Steam]
    FINAL --> TEST[Playtest e QA]
    BAL --> MS4((MS4: Pronto per playtest))
    DIST --> MS5((MS5: Pronto per lancio))
    MS1 --> DEV
    MS3 --> MS2
    MS2 --> FINAL
```