<?php
namespace WLC\Core;

class Theme {

	/**
	 * Integrate with WordPress hooks and filters
	 */
	public function hooks() {
		add_action( 'init', array( new Svg_Support(), 'enable' ) );
		add_action( 'after_setup_theme', array( new ACF(), 'hooks' ) );
		add_action( 'after_setup_theme', array( $this, 'theme_support' ) );
		add_action( 'after_setup_theme', array( $this, 'register_menus' ) );
		add_action( 'widgets_init', array( $this, 'register_sidebars' ) );
		add_action( 'acf/init', array( $this, 'theme_settings' ) );
		add_filter( 'wpcf7_autop_or_not', '__return_false' ); // Remove Contact Form 7 paragraph wrappers.
		add_action( 'block_categories', array( $this, 'theme_block_category' ), 10, 2 );
		add_action( 'init', array( new Woo_Commerce(), 'hooks' ) );
	}



	/**
	 * Theme support for custom logo.
	 */
	public function theme_support() {
		add_theme_support( 'align-wide' );
		add_theme_support( 'core-block-patterns' );
		add_theme_support( 'custom-logo' );
		add_theme_support( 'dark-editor-style' );
		add_theme_support( 'editor-color-palette' );
		add_theme_support( 'editor-gradient-presets' );
		add_theme_support( 'editor-styles' );
		add_theme_support( 'featured-content' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'wp-block-styles' );
		add_theme_support( 'widgets' );
		add_theme_support( 'widgets-block-editor' );
		add_theme_support( 'woocommerce' );
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);
	}



	/**
	 * Register nav menus
	 */
	public function register_menus() {
		register_nav_menus(
			array(
				'header_menu' => __( 'Header Menu', 'WLC' ),
				'footer_menu' => __( 'Footer Menu', 'WLC' ),
			)
		);
	}



	/**
	 * Register widget areas
	 */
	public function register_sidebars() {
		register_sidebar(
			array(
				'name'          => __( 'Main sidebar', 'WLC' ),
				'id'            => 'main_sidebar',
				'before_widget' => '<div>',
				'after_widget'  => '</div>',
				'before_title'  => '<h4>',
				'after_title'   => '</h4>',
			)
		);
	}



	/**
	 * Add options page with theme settings
	 */
	public function theme_settings() {
		if ( function_exists( 'acf_add_options_sub_page' ) ) {
			acf_add_options_sub_page(
				array(
					'page_title'  => __( 'Theme Settings', 'WLC' ),
					'menu_title'  => __( 'Theme Settings', 'WLC' ),
					'parent_slug' => 'themes.php',
				)
			);
		}
	}



	/**
	 * Add Inspire Labs Theme block category.
	 *
	 * @param array $categories Block categories array.
	 *
	 * @return array
	 */
	public function theme_block_category( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'WLC',
					'title' => __( 'White Label Coders', 'WLC' ),
				),
			)
		);
	}



	/**
	 * Class loader
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

}
