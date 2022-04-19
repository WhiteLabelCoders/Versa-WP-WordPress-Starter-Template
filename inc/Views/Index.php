<?php
namespace WLC\Views;

use WLC\Core\Enqueue;

class Index {
	use Enqueue;


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
<<<<<<< HEAD
		$this->enqueue_style( 'main', 'global.css' );
		$this->enqueue_script( 'main', 'app.js', array('jquery') );
=======
		$this->enqueue_style( 'global', 'global.css' );
		$this->enqueue_script( 'app', 'app.js' );
>>>>>>> 5cded5f0588a7725addbf2db728bdafa081ed818
		wp_localize_script(
			'main',
			'WLC',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
			)
		);
		$this->filter_script_loader_tag( 'global', array( 'async' => false ) );
	}


	/**
	 * Here you can add hooks only releted with current view.
	 */
	public function view_hooks() {
	}


}