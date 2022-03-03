<?php
namespace WLC\Core;

class WooCommerce {

	/**
	 * Integrate with WordPress hooks and filters
	 */
	public function hooks() {
		if ( function_exists( 'is_product' ) ) {
			add_filter( 'woocommerce_enqueue_styles', '__return_false' ); // Remove all WooCommerce styles.
			remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
		}
	}

}
