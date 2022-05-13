# Ta3meed

## Как использовать?

> Если лень читать вот [ссылка на Loom](https://www.loom.com/share/2afd64cb4bf0477d890248849030e9b8).

### Разработка
Команда `npm run dev`.

#### Стили
Запускается слушатель на scss, который соберет весь ваш scss из `src/styles/`
в css и положит его в `build/styles/`, не нарушая структуры.

#### Скрипты
Во время разработки скрипты никак не модифицируются, заливайте их на хостинг
напрямую из `src/scripts/`


### Продакшн
Команда `npm run build`.

#### Стили
Компилирует scss из `src/styles/` в css, расставляет префиксы и минимизирует.
Кладет всё в `build/styles/`, не нарушая структуры
и не изменяя имён файлов (суффикс .min не добавляется, а значит не придется менять пути).

#### Скрипты
Минимизирует скрипты из `src/scripts` и кладет их в `build/scripts`, не нарушая структуры
и не изменяя имён файлов (суффикс .min не добавляется, а значит не придется менять пути).


### Линтеры

По умолчанию здесь установлен ESLint для js и Stylelint для scss.
Не забывайте их использовать для этого есть команды `npm run lint-js` и `npm run lint-scss`
соответственно и общая команда `npm run lint` которая выведет сразу все ошибки.
