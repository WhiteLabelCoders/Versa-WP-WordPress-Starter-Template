---
sidebar_position: 9
---

# Helpers
## Funkcje pomocnicze
Funkcje pomocnicze, które są dostępne globalnie, ponad przestrzenią nazw motywu.

```php
is_development() : bool
```

Sprawdza czy WordPress jest w trybie developmentu. Tryb developmentu może zostac uruchomiony poprzez dodanie stałej ```WP_ENV``` w pliku ```wp-config.php``` lub w pliku ```.env``` w przypadku Bedrocka.

---
```php
get_theme_version() : float
```

Zwraca numer wersji motywu zdefinowaną w pliku ```style.css```.

---
```php
get_styles_directory() : string
get_scripts_directory() : string
```

Zwraca ścieżkę do wybranych katalogów (styles, scripts) w katalogu assets (w trybie develpmentu) lub dist (w trybie produkcyjnym).

---
```php
get_styles_uri()
get_scripts_uri()
get_vendor_uri()
```

Zwraca url do wybranych katalogów (styles, scripts, vendor) w katalogu assets (w trybie develpmentu) lub dist (w trybie produkcyjnym).

---
```php
inline_svg( string $url, array $class = array() ) : string
```

Zwraca obrazek w formacie svg lub svgz, który można wstawić w motywie inlinowo.
```$url string``` - jeśli obazek jest w katalogu, podajemy tylko nazwę pliku, jeśli jest w innym katalogu podajemy pełny url do obrazka wraz z nazwą i rozszerzeniem.
```$class string[]``` - klasy, które chcemy dodać do obrazka, w containerze ```<svg class=“”>```

---
## Theme
Klasa Theme zawiera w sobie wszystkie akcje potrzebne do działania motywu i jego customizacji - rejestrując nowy CPT lub CT, menu, widget - należy to zrobić w tym miejscu.

---
## Svg_Support
Klasa zapewnia pełne wsparcie dla grafik svg w WordPressie wraz z ich podgladem, bez koniecznosci użycia dodatkowych wtyczek.

---
## Acf
Jeśli w projekcie używana jest wtyczka ACF, klasa o tej samej nazwie będzie exportować utworzone pola do pliku ```.json``` w głównym katalogu motywu /acf. Również będzie ładować te plik do wtyczki, jednak synchronizację należy wykonać samemu w zakładce "Własne pola > Synchronizacja możliwa"
```php
/wp-admin/edit.php?post_type=acf-field-group&post_status=sync
```

---
## WooCommerce
Jeśli w projekcie używana jest wtyczka WooCommerce to wszystkie modyfikacje jej działania powinny zostać umieszczone w tej klasie.

---
## Enquque
Trait Enqueue pozwala w znaczący sposób ułatwić sobie pracę z rejestrowaniem plików .css i .js zarówno w blokach jak i widokach motywu. Metody z których korzysta się najczęsiej to:
```php
enqueue_style( string $handle, string $file, array $deps = array(), $version = false, $media = false, array $attributes = array() )
```

W przeciwieństwie od standardowych funkcji WordPressa ta jest całkowicie zależna od motywu i trybu w jakim motyw działa.

```$handle string``` - unikalny identyfikator pliku,

```$file string``` - jeśli plik jest umieszczony w katalogu /style należy podać tylko jego nazwę i rozszerzenie, jeśli jest umieszczony poza katalogiem należy podać pełną ścieżkę, nazwę i rozszerzenie,

```$deps string[]``` - zależności,

```$version string``` - jeśli parametr nie został podany, w trybie produkcyjnym zwracana jest wersja motywu, jeśli jest w trybie developmentu zwracany jest timestamp aktualizacji tego pliku,

```$media```,

```$attributes``` - dodatowe atrybuty


```php
enqueue_script( string $handle, string $file, array $deps = array(), $version = false, bool $in_footer = true, array $attributes = array() )
```
Działa dokładnie jak powyższa funkcja.

```$handle string``` - unikalny identyfikator pliku,

```$file string``` - jeśli plik jest umieszczony w katalogu /script należy podać tylko jego nazwę i rozszerzenie, jeśli jest umieszczony poza katalogiem należy podać pełną ścieżkę, nazwę i rozszerzenie,

```$deps string[]``` - zależności,

```$version string``` - jeśli parametr nie został podany, w trybie produkcyjnym zwracana jest wersja motywu, jeśli jest w trybie developmentu zwracany jest timestamp aktualizacji tego pliku,

```$in_footer``` - ładowanie pliku z footera,

```$attributes``` - dodatowe atrybuty, np. array( ‘async’ )

Przykładowe użycie:
```php 
$this->enqueue_style( 'about-us', 'blocks/about_us.css' );
```