<?php
namespace WLC\Components;

class Header {

	/**
	 * Integrate hooks with WordPress.
	 */
	public function hooks() {
		add_action( 'wlc_header', array( get_class( $this ), 'logo' ), 7 );
		add_action( 'wlc_header', array( get_class( $this ), 'primary_menu' ), 9 );
		add_action( 'wlc_header', array( get_class( $this ), 'actions_wrapper' ), 11 );
	}

	/**
	 * Add header wrapper for logo, menu and actions buttons
	 */
	public static function header_wrapper_open() {
		?>
			<div class="container">
		<?php
	}

	/**
	 * Display link with logo
	 */
	public static function logo() {
		if ( function_exists( 'the_custom_logo' ) ) {
			if ( get_theme_mod( 'custom_logo' ) ) {
				$logo_src = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' )[0];
				?>
				<a class="site-header__logo" href="<?php echo esc_html( home_url() ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" rel="home" role="button" tabindex="0">
					<?php echo inline_svg( $logo_src ); ?>
				</a>
				<?php
			}
		}
	}

	/**
	 * Display primary menu
	 */
	public static function primary_menu() {
		wp_nav_menu(
			array(
				'theme_location'  => 'header_menu',
				'container_class' => 'site-header__navigation',
				'menu_id'         => '',
			)
		);
	}

	/**
	 * Add actions wrapper for buttons like for e.g. search, user account, favourites, cart.
	 */
	public static function actions_wrapper() {
		?>
		<div class="site-header__actions">
			<?php do_action( 'il_header_actions' ); ?>
		</div>
		<?php
	}

}