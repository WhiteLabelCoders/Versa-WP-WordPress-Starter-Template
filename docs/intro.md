---
slug: /
sidebar_position: 1
---

# Informacje ogólne

Dokumentacja ** WLC Starter **. Wersja angielska w przygotowaniu.

## Cechy

- PHP OOP,
- przestrzeń nazw z automatycznym ładowaniem przy pomocy spl_autoload_register.
- kompatybilność z Bedrock (nie wymagane),
- zachowane standardy kodowania WordPress,
- metodologia View/class, block/class,
- obsługa zdefiniowanych pól ACF local JSON,
- kompilacja plików z wykorzystaniem Webpack (laravelmix),
- obsługa własnego grid’a (kompatybilna z Bootstrap 5),
- style reset z Bootstrap 5,
- pełna kompatybilność z Bootstrap 5 (nie wymagane),
- pomocny zbiór mixin,
- predefiniowane pola tekstowe ACF dla ```<head>```, ```<body>```, ```<footer>``` do obsługi własnego kodu,
- obsługa własnych styli dla edytora po stronie panelu admina z wykorzystaniem theme.json,
- obsługa inline SVG,

## Instalacja

1. W folderze themes pobierz [repozytorium](https://github.com/WhiteLabelCoders/wlc-starter) zamieniając nazwę “starter” na adekwatną do projektu.

  Z wykorzystaniem SSH
  ```bash
  git clone git@github.com:WhiteLabelCoders/wlc-starter.git starter
  ```

  lub przez HTTPS
  ```bash
  git clone https://github.com/WhiteLabelCoders/wlc-starter.git starter
  ```
<br/>
2. W oknie terminala wykonaj
  ```bash
  npm install
  ```
  lub
  ```bash
  yarn install
  ```
<br/>
3. Skopiuj plik ```.env.dist``` do ```.env``` i uzupełnij APP_URL np.
  ```bash
  APP_URL = starterdemo.local
  ```

  Nazwa ta powinna być taka jak ta pod którą masz dostęp do strony.

## Standardy kodowania

Motyw wykorzystuje standardy kodowania [WordPress](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).

W celu zachowania kontroli wcięc dla różnych typów plików korzystamy z [pliku konfiguracyjny](https://editorconfig.org/) ```.editorconfig```.<br/>
Do obsługi tego pliku i zawartej w nim konfiguracji należy zainstalować opdowiedna wtyczkę:

[VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)<br/>
[PHPStorm](https://plugins.jetbrains.com/plugin/7294-editorconfig)

## Development
1. W pliku ```wp-config.php``` ustaw

  ```php
  define( 'WP_DEBUG', true );
  ```
<br/>

2. Przejdź do terminala i użyj
  ```bash
  npm run watch
  ```
  lub
  ```bash
  yarn watch
  ```

  Od tej pory pod adresem ```http://localhost:3000``` oraz tym zdefiniowanym w ```APP_URL``` z wywołaniem po porcie 3000 będzie dostępna strona gotowa do developmentu np. ```http://starterdemo.local:3000```
  z automatycznym przeładowaniem podczas wprowadzania zmian. W oknie terminala zobaczysz również adres pod którym będąc w obrębie swojej sieci wywołasz stronę np. na urządzeniu mobilnym.
  
  ![Development image](./assets/image1.png)

  :::caution Uwaga
  Pamiętaj aby przed wysłaniem zmian do repozytorium użyć
  ```bash
  npm run production
  ```
  lub
  ```bash
  yarn production
  ```
  aby pliki scss, js zostały zminifikowane.
  :::
