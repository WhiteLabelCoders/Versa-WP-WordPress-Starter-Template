---
sidebar_position: 6
---

# View/class, block/class
Standardowo podczas ładowania klas po zainicjalizowaniu obiektu odpalana jest metoda hooks() i jeśli istnieje metoda init().

** File: .../wlc-starter-demo/inc/core/class-theme.php **

```php
/**
 * Class loaderclass=
 */
public function class_loader( array $classes ) {
	foreach ( $classes as $class ) {
		$object = new $class;
		$object->hooks();
		if ( method_exists( $object, 'init' ) ) {
			$object->init();
		}
	}
}
```
