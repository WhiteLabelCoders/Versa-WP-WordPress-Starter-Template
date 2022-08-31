---
sidebar_position: 2
---

# Pliki i foldery

## /acf
Tutaj automatycznie w pliku ```.json``` zostaną zapisane zdefiniowane pola z ** ACF PRO ** i zaimportowane podczas pobierania zmian z repozytorium.

## /assets
Folder w którym wprowadzasz wszystkie zmiany.

-- fonts - tutaj umieszczaj ładowane fonty.

-- images - tutaj umieszczaj grafiki będące częścią integralną strony

-- js - tutaj umieszczaj skrypty

-- scss - tutaj umieszczaj wszystkie style

-- svg - tutaj umieszczaj pliki svg będące integralną częścią strony

-- vendors - tutaj umieszczaj zewnętrzne biblioteki, których używasz na stronie

## /dist
Tutaj umieszczane są wszystkie pliki wynikowe, które są ładowane właśnie z tego miejsca na stronie.

:::caution Uwaga
Nie wprowadzaj zmian w tym folderze.
:::

## /inc
Tutaj znajdują się wszystkie pliki php w których będziesz wprowadzał zmiany.

-- Blocks - folder w którym będziesz umieszczał wszystkie bloki (np. bloki Gutenberga)

-- Components - folder w którym będziesz umieszczał wszystkie komponenty (np. header, footer)

-- Core - tutaj będziesz wprowadzał zmiany ogólne np. dotyczące ustawień theme jeżeli zajdzie taka potrzeba

-- Views - tutaj będziesz wprowadzał zmiany dotyczące widoków np. dla strony głównej, bloga, strony itd.

## /footer.php
Tutaj znajduje się layout dla footer.

## /header.php
Tutaj znajduje się layout dla header.

## /index.php
Tutaj znajduje się główny layout strony.

## /sidebar.php
Tutaj znajduje się główny layout dla sidebar jeżeli używasz.

## /theme.json.dist
Ten plik odpowiada za customowe style po stronie admina. Jeżeli chcesz zdefiniować swoje własne ustawienia po stronie admina do wyboru np. dla domyślnych kolorów,
fontów to rób to w tym pliku. Pamiętaj, że musisz ten plik skopiować lub zmienić mu nazwę na ```theme.json```.
Więcej na temat możliwości tego pliku znajdziesz tutaj:

https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/

https://developer.wordpress.org/themes/advanced-topics/theme-json/



