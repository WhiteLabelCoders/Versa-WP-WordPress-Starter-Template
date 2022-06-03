<?php
/**
 * View index class file.
 *
 * @package wlc-starter.
 * @author  Mateusz Major
 * @link    https://whitelabelcoders.com/
 */

namespace WLC\Views;

use WLC\Core\Enqueue_Trait;

/**
 * Primary view class (index).
 */
class Index {
	use Enqueue_Trait;

	/**
	 * Integrate with WordPress actions and filters hooks
	 */
	public function hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'global_assets' ) );
		add_action( 'template_redirect', array( $this, 'view_hooks' ) );
	}



	/**
	 * Enqueue global assets
	 */
	public function global_assets() {
		$this->enqueue_style( 'googlefonts', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap' );
		$this->enqueue_style( 'global', 'global.css' );
		$this->enqueue_script( 'app', 'app.js' );
		wp_localize_script(
			'main',
			'WLC',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
			)
		);
	}


	/**
	 * Here you can add hooks only related with current view.
	 */
	public function view_hooks() {
	}
}
