<?php
namespace WLC\Components;

class Loop_Posts {

	/**
	 * Integrate hooks with WordPress.
	 */
	public function hooks() {
		add_filter( 'excerpt_length', array( $this, 'excerpt_length' ) );
		add_action( 'fh_post', array( __CLASS__, 'set_post_item' ) );
		add_action( 'fh_post_item', array( __CLASS__, 'thumbnail' ), 5 );
		add_action( 'fh_post_item', array( __CLASS__, 'title' ), 10 );
		add_action( 'fh_post_item', array( __CLASS__, 'excerpt' ), 15 );
	}



	/**
	 * Custom excerpt length.
	 *
	 * @param int $length No of words.
	 *
	 * @return int
	 */
	public function excerpt_length( $length ){
		return 20;
	}



	/**
	 * Create single post item for loop.
	 */
	public static function set_post_item() {
		if ( ! is_singular() ) {
			?>
				<a class="item item-loop item-<?php echo get_post_type() ?>" href="<?php the_permalink(); ?> ">
				<?php do_action( 'fh_post_item' ); ?>
				</a>
			<?php
		}
	}



	/**
	 * Thumbnail for the post item.
	 */
	public static function thumbnail() {
		the_post_thumbnail( 'full', array( 'class' => 'img-responsive responsive--full item__thumbnail' ) );
	}



	/**
	 * Title for the post item.
	 */
	public static function title() {
		the_title( '<h2 class="item__title">', '</h2>' );
	}



	/**
	 * Excerpt for the post item.
	 */
	public static function excerpt() {
		the_excerpt();
	}

}