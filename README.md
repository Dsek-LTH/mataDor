# mataDor

Ett litet system för att hålla reda på när man kan hämta sin mat! Tanken är att hålla det hela enkelt. En jobbare står i baren och när köket ger dem en tallrik mat och tillhörande lapp, skriver denna upp detta i systemet istället för att springa runt. Sedan när någon hämtas så tar personen bort numret. Med denna enkla implementation så är det lätt att hantera när något går fel! :)

## Setup (linux && mac)

- make sure you have node >=8.12 and yarn installed. (npm -g install yarn if you have npm).
- clone the repository.
- run `yarn dev`.
- open http://localhost:3000/ in your favorite browser.
- adding numbers is available at /admin

## Default environmental values

| Env-variable | Default Value |
| :----------- | :------------ |
| MATADOR_PORT | `3001`        |
