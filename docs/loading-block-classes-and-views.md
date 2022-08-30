---
sidebar_position: 5
---

# Ładowanie klas bloków i widoków

** File: .../wlc-starter-demo/functions.php **
```php
$setup->hooks();
$setup->class_loader(
    array(
	'WLC\Blocks\Simple_Block',
	'WLC\Components\Header',
	'WLC\Components\Footer',
	'WLC\Components\Loop_Posts',
	'WLC\Views\Page',
	'WLC\Views\Blog',
	'WLC\Views\Single_Post',
	'WLC\Views\Home_Page',
	)
```

Dodajemy odpowiedni wpis przestrzeni nazw do tablicy.
