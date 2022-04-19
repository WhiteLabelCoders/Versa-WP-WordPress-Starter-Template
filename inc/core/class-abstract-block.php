<?php

namespace WLC\Core;

use WLC\Core\Enqueue_Trait;

/**
 * Contains common methods for all Gutenberg blocks.
 */
abstract class Abstract_Block {
	use Enqueue_Trait;

	/**
	 * A unique name (slug) that identifies the block.
	 *
	 * @var string $block_name  A block name can only contain lowercase alphanumeric characters and dashes, and must begin with a letter.
	 */
	public $block_name;

	/**
	 * Title.
	 *
	 * @var string $title The display title for your block. For example ‘Testimonial’.
	 */
	public $title;

	/**
	 * Description.
	 *
	 * @var string $description (Optional) This is a short description for your block.
	 */
	public $description;

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



	/**
	 * Construct
	 */
	public function __construct() {
		$this->block_name = $this->get_block_name( get_class( $this ) );
		$this->hooks();
		$this->add_local_field_group();
	}



	/**
	 * Get block name in snake format.
	 *
	 * @param  string $class_name .
	 * @return string .
	 */
	public function get_block_name( string $class_name ): string {
		$name = explode( '\\', $class_name );
		return strtolower( preg_replace( '/_/', '-', array_pop( $name ) ) );
	}



	/**
	 * Init Hooks.
	 */
	public function hooks() {
		add_action( 'acf/init', array( $this, 'register_block_type' ) );
	}



	/**
	 * Register block
	 */
	public function register_block_type() {
		if ( function_exists( 'acf_register_block_type' ) ) {
			$block = array(
				'name'           => $this->block_name,
				'title'          => $this->title,
				'description'    => $this->description,
				'keywords'       => '',
				'category'       => $this->category,
				'align'          => $this->align,
				'icon'           => $this->icon,
				'supports'       => array(
					'align'         => $this->supports_align,
					'align_content' => true,
					'anchor'        => true,
				),
				'enqueue_assets' => array( $this, 'enqueue_assets' ),
			);

			if ( file_exists( get_template_directory() . '/template-parts/blocks/' . $this->block_name . '.php' ) ) {
				$block['render_callback'] = array( $this, 'render_frontend_file' );
			} else {
				$block['render_callback'] = array( $this, 'render_frontend' );
			}

			acf_register_block_type( $block );
		}
	}



	/**
	 * Get block classes as string.
	 *
	 * @param array $block WordPress block values and settings from register_block_type.
	 * @param array $additional_classes Additional classes added to defaults.
	 *
	 * @return string
	 */
	public function get_block_class( $block, array $additional_classes = array() ) : string {
		$class_array[] = 'block';
		$class_array[] = $this->block_name;
		$class_array[] = isset( $block['align'] ) ? 'align' . $block['align'] : '';
		$class_array[] = isset( $block['className'] ) ? $block['className'] : '';
		if ( $additional_classes ) {
			$class_array = array_merge( $class_array, $additional_classes );
		}

		$class_array = array_map(
			function( $class ) {
				return sanitize_html_class( $class );
			},
			$class_array
		);

		return implode( ' ', $class_array );
	}


	/**
	 * Enqueue js and css files for this block.
	 *
	 * You can use within one of these:
	 * @uses WLC\Core\Enqueue\enqueue_style()
	 * @uses WLC\Core\Enqueue\enqueue_script()
	 * @uses wp_enqueue_script()
	 * @uses wp_enqueue_style()
	 */
	public function enqueue_assets() {}


	/**
	 * Adds a local field group.
	 **/
	public function add_local_field_group() {}



	/**
	 * Render frontend from extended file template.
	 *
	 * @param array $block Block.
	 * @param mixed $content Content.
	 * @param bool  $is_preview Preview.
	 * @param int   $post_id Post Id.
	 *
	 * @return void
	 */
	public function render_frontend_file( array $block, $content = '', $is_preview = false, $post_id = 0 ) {

		$content    = get_field( $this->block_name );
		$data       = explode( '_', $block['id'] )[1];
		$id         = isset( $block['anchor'] ) ?? $data;
		$class      = $this->get_block_class( $block );

		include get_template_directory() . '/template-parts/blocks/' . $this->block_name . '.php';
	}



	/**
	 * Render frontend
	 *
	 * @param array $block Block.
	 * @param mixed $content Content.
	 * @param bool  $is_preview Preview.
	 * @param int   $post_id Post Id.
	 *
	 * @return void
	 */
	public function render_frontend( array $block, $content = '', $is_preview = false, $post_id = 0 ) {}
}
