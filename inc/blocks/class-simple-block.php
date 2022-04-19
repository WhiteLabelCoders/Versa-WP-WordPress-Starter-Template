<?php
/**
 * Simple block structure and content.
 *
 * @package wlc-starter
 * @author  Mateusz Major
 * @link    https://whitelabelcoders.com/
 */

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
	 * Load ACF Field array into block configuration.
	 */
	public function add_local_field_group() {
		if ( function_exists( 'acf_add_local_field_group' ) ) :

			acf_add_local_field_group(
				array(
					'key'                   => 'wlc_simple_block',
					'title'                 => 'Simple block',
					'fields'                => array(
						array(
							'key'               => 'wlc_simple_block_group',
							'label'             => 'Simple block',
							'name'              => 'simple_block',
							'type'              => 'group',
							'instructions'      => '',
							'required'          => 0,
							'conditional_logic' => 0,
							'wrapper'           => array(
								'width' => '',
								'class' => '',
								'id'    => '',
							),
							'layout'            => 'block',
							'sub_fields'        => array(
								array(
									'key'               => 'wlc_simple_block_heading',
									'label'             => 'Heading',
									'name'              => 'heading',
									'type'              => 'text',
									'instructions'      => '',
									'required'          => 0,
									'conditional_logic' => 0,
									'wrapper'           => array(
										'width' => '',
										'class' => '',
										'id'    => '',
									),
									'default_value'     => '',
									'placeholder'       => '',
									'prepend'           => '',
									'append'            => '',
									'maxlength'         => '',
								),
								array(
									'key'               => 'wlc_simple_block_text',
									'label'             => 'Text',
									'name'              => 'text',
									'type'              => 'wysiwyg',
									'instructions'      => '',
									'required'          => 0,
									'conditional_logic' => 0,
									'wrapper'           => array(
										'width' => '',
										'class' => '',
										'id'    => '',
									),
									'default_value'     => '',
									'tabs'              => 'all',
									'toolbar'           => 'full',
									'media_upload'      => 1,
									'delay'             => 0,
								),
								array(
									'key'               => 'wlc_simple_block_img',
									'label'             => 'Image',
									'name'              => 'image',
									'type'              => 'image',
									'instructions'      => '',
									'required'          => 0,
									'conditional_logic' => 0,
									'wrapper'           => array(
										'width' => '',
										'class' => '',
										'id'    => '',
									),
									'return_format'     => 'id',
									'preview_size'      => 'thumbnail',
									'library'           => 'all',
									'min_width'         => '',
									'min_height'        => '',
									'min_size'          => '',
									'max_width'         => '',
									'max_height'        => '',
									'max_size'          => '',
									'mime_types'        => '',
								),
							),
						),
					),
					'location'              => array(
						array(
							array(
								'param'    => 'block',
								'operator' => '==',
								'value'    => 'acf/simple-block',
							),
						),
					),
					'menu_order'            => 0,
					'position'              => 'normal',
					'style'                 => 'default',
					'label_placement'       => 'top',
					'instruction_placement' => 'label',
					'hide_on_screen'        => '',
					'active'                => true,
					'description'           => '',
					'show_in_rest'          => 0,
				)
			);
		endif;
	}



	/**
	 * Render frontend template.
	 *
	 * @param array  $block.
	 * @param string $content.
	 * @param false  $is_preview.
	 * @param int    $post_id.
	 */
	public function render_frontend( array $block, $content = '', $is_preview = false, $post_id = 0 ) {
		$content    = get_field( $this->block_name );
		$data       = explode( '_', $block['id'] )[1];
		$id         = isset( $block['anchor'] ) ?? $data;
		$class      = $this->get_block_class( $block );

		?>
		<section id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $class ); ?>">
			<div class="container">
				<h2><?php echo esc_html( $content['heading'] ); ?></h2>
				<div class="text">
					<?php echo wp_kses_post( $content['text'] ); ?>
				</div>
				<div class="img">
					<?php echo wp_get_attachment_image( $content['image'], 'medium' ); ?>
				</div>
			</div>
		</section>
		<?php
	}
}
