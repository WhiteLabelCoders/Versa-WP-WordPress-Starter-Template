---
sidebar_position: 7
---

# Definiowanie bloków gutenberg
Najprostsza postać bloku ACF:
Dodajemy plik class-nazwa-klasy.php do katalogu /inc/blocks, w którym rozszerzamy klasę Abstract_Block:

```php title="File: ../inc/block/class-nazwa-klasy.php"
namespace WLC\Blocks;

use WLC\Core\Abstract_Block;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
};

/**
 * Simple block structure and content.
 */
class Simple_Block extends Abstract_Block {

	/**
	 * Simple block constructor.
	 */
	public function __construct() {
		parent::__construct();
		$this->title       = __( 'Simple block', 'WLC' );
		$this->description = __( 'Simple block description', 'WLC' );
	}

	/**
	 * Render frontend template.
	 *
	 * @param array  $block block.
	 * @param string $content content.
	 * @param false  $is_preview preview switch.
	 * @param int    $post_id ID post.
	 */
	public function render_frontend( array $block, $content = '', $is_preview = false, $post_id = 0 ) {
		$content = get_field( $this->block_name );
		$data    = explode( '_', $block['id'] )[1];
		$id      = isset( $block['anchor'] ) ?? $data;
		$class   = $this->get_block_class( $block );

		?>
		<section id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $class ); ?>">
			<div class="container">
				<h2>Title</h2>
				<div class="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero sem, volutpat vel vehicula id, luctus eget turpis. Sed in eros non enim eleifend mattis eget eu orci. 
				</div>
			</div>
		</section>
		<?php
	}
}
```

W konstruktorze definiujemy właściwości klasy $title i $description ($title - wymagany)
Definiujemy metodę render_frontend() z definicją zmiennych 
$content - zawiera tablicę wartości grupy pól ACF (Grupa pól ACF powinna posiadać nazwę naszej klasy w postaci "nazwa-klasy".
Tak zdefiniowana grupa pól będzie w dostępna w naszym szablonie w postaci tablicy pól.
W metodzie render_frontend() definiujemy również szablon html bloku.
Tak przygotowaną klasę ładujemy w pliku functions.php

## Dodatkowe właściwości które możemy zdefiniować w konstruktorze klasy

```php title="File: ../inc/core/class-abstract-block.php"
/**
* Block category.
*
* @var string $category  Blocks are grouped into categories to help users browse and discover them.
* The core provided categories are [ common | formatting | layout | widgets | embed ]
*/
public $category = 'wlc';
 
/**
* Icon.
*
* @var string|array $icon (Optional) An icon property can be specified to make it easier to identify a block. These can be any of WordPress’ Dashicons, or a custom svg element.
*/
public $icon = 'block-default';
 
/**
* Align.
*
* @var string (Optional) The default block alignment.
* Available settings are left, center, right, wide and full.
*/
public $align = 'wide';
 
/**
 * Align supports.
 *
 * @var bool|array $supports_align Category displayed name.
 */

public $supports_align = array( 'full', 'wide' );
```

## Style i skrypty
Definiując metodę enqueue_assets() możemy dodać do bloku style i skrypty ładowane tylko na stronach, na których występuje dany blok.

```php title="File: .../wlc-starter-demo/inc/core/class-abstract-block.php"
/**
 * Enqueue js and css files for this block.
 *
 * You can use within one of these:
 *
 * @uses WLC\Core\Enqueue\enqueue_style()
 * @uses WLC\Core\Enqueue\enqueue_script()
 * @uses wp_enqueue_script()
 * @uses wp_enqueue_style()
 */

public function enqueue_assets() {}
```


przykład:

```php
public function enqueue_assets() {
	$this->enqueue_style( 'simple-block', 'blocks/simple_block.css' );
}
```

Możemy do tego wykorzystać funkcje pomocnicze

```php
WLC\Core\Enqueue\enqueue_style()
WLC\Core\Enqueue\enqueue_script()
```

lub funkcje wp

```php
wp_enqueue_script()
wp_enqueue_style()
```

## Pola ACF dodane z kodu

Jeśli chcemy przygotować zestaw pól widocznych w panelu administracyjnym WorpdPress, możemy do tego wykorzystać metodę:

```php
public function add_local_field_group() {
    code here…
}
```
Dodając do niej kod PHP grupy pól.

## Zewnętrzne pliki szablonów html

Plik z nazwą nazwa-klasy.php dodajemy do katalogu template_parts/blocks/ 
Plik jest automatycznie dołączany i ma pierwszeństwo przed metodą render_frontend(){}

przykład pliku html

```html
<section id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $class ); ?>">
	<div class="container">
		<h2>Title</h2>
		<div class="text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit... 
		</div>
	</div>
</section>
```

Podobnie jak przy metodzie render_frontend(){} mamy dostęp do tablicy zapisanej w zmiennej $content z wartościami pól ACF.

