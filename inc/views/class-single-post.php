<?php
namespace WLC\Views;

class Single_Post extends Index {

	/**
	 * Integrate with WordPress actions and filters hooks
	 */
	public function hooks() {
		parent::hooks();
	}



	/**
	 * Here you can add hooks only releted with current view.
	 */
	public function view_hooks() {
		parent::view_hooks();
		if ( is_singular( 'post' ) ) {
			add_action( 'wlc_before_content', array( __CLASS__, 'post_wrapper_open' ), 5 );
			add_action( 'wlc_after_content', array( __CLASS__, 'post_wrapper_close' ), 5 );
			add_action( 'wlc_entry', array( __CLASS__, 'post_title' ), 5 );
			add_action( 'wlc_entry', array( __CLASS__, 'post_details' ), 10 );
			add_action( 'wlc_post_details', array( __CLASS__, 'post_date' ), 5 );
			add_action( 'wlc_post_details', array( __CLASS__, 'post_reading_time' ), 10 );
			add_action( 'wlc_entry', array( __CLASS__, 'post_content' ), 15 );
		}
	}



	/**
	 * Open post wrapper
	 */
	public static function post_wrapper_open() {
		?>
			<article <?php post_class(); ?>>
		<?php
	}



	/**
	 * Open post wrapper
	 */
	public static function post_wrapper_close() {
		?>
			</article>
		<?php
	}



	/**
	 * Post title
	 */
	public static function post_title() {
		the_title( '<h1 class="post__title h2">', '</h1>' );
	}



	/**
	 * Post content
	 */
	public static function post_details() {
		?>
			<div class="post__details">
				<?php do_action( 'wlc_post_details' ); ?>
			</div>
		<?php
	}



	/**
	 * Post date
	 */
	public static function post_date() {
		?>
			<time class="post__details__date" datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) . ' ' . get_post_time( 'H:i' ) ); ?>"><?php the_date(); ?></time>
		<?php
	}



	/**
	 * Post date
	 */
	public static function post_reading_time() {
		$clean_content = wp_strip_all_tags( get_the_content() );
		$word_count    = str_word_count( $clean_content );
		$time          = ceil( $word_count / 100 );
		?>
			<span class="post__details__reading-time">
				<?php
				echo esc_html(
					sprintf(
						/* translators: %d: reading time in minutes */
						__( 'Reading time: %d min', 'WLC' ),
						$time
					)
				);
				?>
			</span>
		<?php
	}



	/**
	 * Post content
	 */
	public static function post_content() {
		the_content();
	}
}
