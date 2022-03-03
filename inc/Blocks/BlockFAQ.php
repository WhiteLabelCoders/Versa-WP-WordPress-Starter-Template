<?php

namespace WLC\Blocks;

use WLC\Core\Enqueue;

/**
 * Slider block structure and content.
 */
class BlockFAQ {
	use Enqueue;


	/**
	 * Init Hooks.
	 */
	public function hooks() {
		add_action( 'acf/init', array( $this, 'register_block_type' ) );
	}



	/**
	 * Retrieve block name from current class name
	 *
	 * @return string
	 */
	public function get_block_name() {
		$path = explode( '\\', __CLASS__ );
		return ltrim( strtolower( preg_replace( '/[A-Z]([A-Z](?![a-z]))*/', '_$0', array_pop( $path ) ) ), '_' );
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
		$class_array[] = $this->get_block_name();
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

		return implode( $class_array, ' ' );
	}



	/**
	 * Register block
	 */
	public function register_block_type() {
		if ( function_exists( 'acf_register_block_type' ) ) {
			$block = array(
				'name'            => $this->get_block_name(),
				'title'           => __( 'FAQ', 'WLC' ),
				'description'     => __( 'Frequently Asked Questions Block', 'WLC' ),
				'keywords'        => '',
				'render_callback' => array( $this, 'render_frontend' ),
				'category'        => 'WLC',
				'align'           => 'center',
				'icon'            => 'editor-help',
				'supports'        => array(
					'align'         => array( 'center', 'full', 'wide' ),
					'align_content' => true,
					'anchor'        => true,
					'className'     => true,
				),
				'enqueue_assets'  => function() {
					$this->enqueue_script( 'list', 'list.min.js', array(), '2.3.0' );
					$this->enqueue_script( $this->get_block_name(), $this->get_block_name() . '.js', array( 'list' ) );
				},
			);
			acf_register_block_type( $block );
		}
	}



	/**
	 * Render frontend
	 *
	 * @param array $block      Block.
	 * @param mixed $content    Content.
	 * @param bool  $is_preview Preview.
	 * @param int   $post_id    Post Id.
	 *
	 * @return void
	 */
	public function render_frontend( array $block, $content = '', $is_preview = false, $post_id = 0 ) {

		$content = get_field( $this->get_block_name() );
		$data    = explode( '_', $block['id'] )[1];
		$id      = isset( $block['anchor'] ) ?? $data;
		$class   = $this->get_block_class( $block );

		?>
		<section class="<?php echo esc_attr( $class ); ?>" data-block="<?php echo esc_attr( $data ); ?>" data-id="<?php echo esc_attr( $id ); ?>">
			<div class="container faq">
				<div class="faq__search">
					<input type="search" class="search" placeholder="<?php echo esc_attr( $content['title'] ?? __( 'Search', 'WLC' ) ); ?>" />
				</div>
				<ul class="faq__list list">
					<?php if ( isset( $content['list'] ) && array_filter( $content['list'] ) ) : ?>
						<?php foreach ( $content['list'] as $row ) : ?>
							<li class="faq__list__row">
							<?php if ( ! empty( $row['question'] ) ) : ?>
								<div class="question">
									<?php echo esc_html( $row['question'] ); ?>
								</div>
							<?php endif; ?>
							<?php if ( ! empty( $row['answer'] ) ) : ?>
								<div class="answer">
									<?php echo wp_kses_post( $row['answer'] ); ?>
								</div>
							<?php endif; ?>
							</li>
						<?php endforeach; ?>
					<?php endif; ?>
				</ul>
			</div>
		</section>
		<?php
	}
}
