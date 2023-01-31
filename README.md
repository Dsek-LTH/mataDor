# mataDor

Ett litet system för att hålla reda på när man kan hämta sin mat!

Tanken är att hålla det hela enkelt. En jobbare står i baren och när köket ger dem en tallrik mat och tillhörande lapp, skriver denna upp detta i systemet istället för att springa runt. Sedan när maten hämtas så tar personen bort numret. Med denna enkla implementation så är det lätt att hantera när något går fel! :)

Denna uppdatering ger också möjlighet att använda ett nytt system med en enkel streckkodsläsare.

## Notiser

För dig som väntar på din mat kan man nu även få en notis om du klickar på notis-bjällran!

## Setup (linux && mac)

- se till att du har node >=8.12 och yarn installerat. (`npm -g install yarn` om du inte har yarn).
- klona repot
- kör `yarn`
- kör `yarn dev`
- mataDor finns nu på http://localhost:3000/ i din favoritwebbläsare
- lägg till nummer på /admin
- lägg till nummer med /add/xxx
- ta bort nummer med /del/xxx

## Standardvariabler

| Env-variable | Default Value |
| :----------- | :------------ |
| PORT         | `3001`        |
