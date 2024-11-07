# MyFox demo

## Prerekvizity
* Node.js v22

## Instalace
```bash
npm ci
```

## Spuštění
```bash
npm run dev
```

Otevřit [http://localhost:3000/reservations](http://localhost:3000/reservations).


## Průvodní komentáře

### Vysvětlení zvolených nástrojů
* Zvolili jsme Next.js devstack, protože ho známe a používáme
* Zvolili jsme Apollo Client, protože po rychlém zkoumání vypadal jako stabilní knihovna, která nám umožní efektivně udělat potřebné. Osobně radši přistupujeme k DB napřímo.
* GUI je aktuálně přizpůsobeno pro rozlišení 375 x 812 (dle Figmy)

### Co dál
* GUI
  * Implementovat ho i pro větší (menší?) rozlišení (není jasná podoba), pro orientaci landscape
  * Načítat logo subjektu dané rezervace
  * Implementovat plovoucí menu a druhou stránku
  * Plovoucí menu nejspíš s využitím existující knihovny
  * Možná zavést nějakou obecnou GUI knihovnu, třeb MUI
  * Doplnit HTML head (title, meta tags)
  * Zapouzdřit komponenty vč. stylů, například dle atomic design
  * Asi pevná hlavička  (se scrollem nezmizí)
  * Možná více použít CSS variables
* Aplikační logika
  * Parametrizovat customer ID (nyní hardcodované)
  * Umožnit měnit a ukládat osobní údaje uživatele
  * Pokud by se logika ukázala složitější, zavést nějaký app state manager, třeba redux
  * Možná SSR
* Kód, devops
  * Generovat TypeScript definitions automaticky z GraphQL schémat a dotazů
  * Code formatter (např. prettier)
  * Github actions (automatické testy / code style check při PR, automatický deploy)
