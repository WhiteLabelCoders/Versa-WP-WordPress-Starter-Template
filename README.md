# WLC Starter Theme


### Cechy

- PHP OOP,
- Przestrzeń nazw z automatycznym ładowaniem przy pomocy spl_autoload_register.
- Kompatybilność z Bedrock (nie wymagane),
- Zachowane standardy kodowania WordPress,
- Metodologia View/class, block/class,
- Obsługa zdefiniowanych pól ACF local JSON,
- Kompilacja plików z wykorzystaniem Webpack (laravelmix),
- Obsługa własnego grid’a (kompatybilna z Bootstrap 5),
- Style reset z Bootstrap 5,
- Pełna kompatybilność z Bootstrap 5 (nie wymagane),
- Pomocny zbiór mixin,
- Predefiniowane pola tekstowe ACF dla `<head>`, `<body>`, `<footer>` do obsługi własnego kodu,
- Obsługa własnych styli dla edytora po stronie panelu admina z wykorzystaniem theme.json,
- Obsługa inline SVG,


### Instalacja

1. W folderze themes pobierz to repozytorium zamieniając nazwę “starter” na adekwatną do projektu.<br><br>
   Z wykorzystaniem SSH:<br>
   `git clone git@github.com:WhiteLabelCoders/wlc-starter.git starter`<br><br>
   lub przez HTTPS:<br>
   `git clone https://github.com/WhiteLabelCoders/wlc-starter.git starter`<br><br>
2. W oknie terminala wykonaj:<br>
   `npm install` lub `yarn install`<br><br>
3. Skopiuj plik .env.dist do .env i uzupełnij APP_URL np.:<br>
   `APP_URL = starterdemo.local`<br><br>
   Nazwa ta powinna być taka jak ta pod którą masz dostęp do strony.
   

### Standardy kodowania

Motyw wykorzystuje standardy kodowania [WordPress.](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/)


### Development

1. W pliku **wp-config.php** ustaw `define( 'WP_DEBUG', true );`
2. Przejdź do terminala i użyj `npm run watch` lub `yarn watch` . Od tej pory pod adresem http://localhost:3000 oraz tym zdefiniowanym w APP_URL z wywołaniem po porcie 3000 będzie dostępna strona gotowa do developmentu np. http://starterdemo.local:3000 z automatycznym przeładowaniem podczas wprowadzania zmian. W oknie terminala zobaczysz również adres pod którym będąc w obrębie swojej sieci wywołasz stronę np. na urządzeniu mobilnym.<br><br>
   **UWAGA:** Pamiętaj aby przed wysłaniem zmian do repozytorium użyć
   `npm run production` lub `yarn production` aby pliki scss, js zostały zminifikowane.

### Dokumentacja

Link do pełnej [dokumentacji](https://docs.google.com/document/d/1TYpTeMU-V67PKi8fy2ZemU0XxvyzvWPnUOrnf0oSmdA/edit#heading=h.xcdt47m59fxk)

