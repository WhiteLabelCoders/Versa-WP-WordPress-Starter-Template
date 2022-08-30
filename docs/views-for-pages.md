---
sidebar_position: 8
---

# Widoki dla stron
Widoki dla stron, (postst, page, custom-post-type...) definiujemy w katalogu views/ tworząc odpowiednią klasę w pliku
np. class-custom-post-type.php

w pliku tym rozszerzamy klasę Index 

class Custom_Post_Type extends indxes {}

definiujemy metodę hooks() {}

```php
public function hooks() {
    parent::hooks();
}
```

W tej metodzie możemy modyfikować zachowanie WordPress, np modyfikacja main query podczepiając się pod odpowiedni hook oraz definiując odpowiednią metodę
przykład:

```php
public function hooks() {
	parent::hooks();
	add_action( 'pre_get_posts', array( $this, 'main_query_filter' ) );
}
```

W metodzie view_hooks(){} podpinamy się pod odpowiednie hooki widoku definiując dla tych akcji odpowiednie metody
przykład:

```php
public function view_hooks() {
	parent::view_hooks();
	if ( is_home() ) {
		add_action( 'wlc_before_content', array( get_class( $this ), 'blog_title' ), 2 );

		add_action( 'wlc_before_loop', array( get_class( $this ), 'open_container' ), 10 );
		add_action( 'wlc_after_loop', array( get_class( $this ), 'close_container' ), 20 );
		add_action( 'wlc_after_loop', array( get_class( $this ), 'pagination' ), 30 );
		add_action( 'wlc_entry', array( get_class( $this ), 'loop_entry' ), 5 );
	}
}
```

Jeśli chcemy w przyszłości mieć możliwość wyłączania hooków widoków w specjalizowanych widokach (np tylko dla jednej kategorii), dla których przygotujemy oddzielną klasę 
warto rozważyć definicje metod w pierwotnym widoku jako metody statyczne i zaczepiani ich do hooków w postaci

```php
add_action( 'wlc_entry', array( __CLASS__, 'post_title' ), 5 );
```

Dzięki temu będziemy mogli wyłączyć daną akcjię w innym miejscu.

```php
remove_action( 'wlc_entry', array( 'Nazwa_Klasy', 'nazwa_metody' );
```
