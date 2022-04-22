<?php
/**
 * View blog class file.
 *
 * @package wlc-starter.
 * @author  Mateusz Major
 * @link    https://whitelabelcoders.com/
 */

namespace WLC\Views;

use WLC\Core\Enqueue;

/**
 * Extended index view class.
 * Home page posts template.
 */
class Blog extends Index {

	/**
	 * Integrate with WordPress actions and filters hooks
	 */
	public function hooks() {
		parent::hooks();
		add_action( 'pre_get_posts', array( $this, 'main_query_filter' ) );
	}



	/**
	 * Categories filter on main query.
	 *
	 * @param \WP_Query $query WordPress query obj.
	 *
	 * @return mixed
	 */
	public function main_query_filter( $query ) {
		$current_category = isset( $_GET['category'] ) ? sanitize_key( $_GET['category'] ) : false;
		if ( $current_category && ! is_admin() && $query->is_main_query() && $query->is_home() ) {
			$query->set(
				'tax_query',
				array(
					array(
						'taxonomy' => 'category',
						'field'    => 'slug',
						'terms'    => $current_category,
					),
				)
			);
		}
		return $query;
	}



	/**
	 * Here you can add hooks only releted with current view.
	 */
	public function view_hooks() {
		parent::view_hooks();
		if ( is_home() ) {
			add_action( 'wlc_before_content', array( get_class( $this ), 'blog_title' ), 2 );
			add_action( 'wlc_before_content', array( $this, 'blog_filters' ), 4 );

			add_action( 'wlc_before_loop', array( get_class( $this ), 'open_container' ), 10 );
			add_action( 'wlc_after_loop', array( get_class( $this ), 'close_container' ), 20 );
			add_action( 'wlc_after_loop', array( get_class( $this ), 'pagination' ), 30 );

			add_action( 'wlc_entry', array( get_class( $this ), 'loop_entry' ), 5 );
		}
	}



	/**
	 * Add archive title
	 */
	public static function blog_title() {
		?>
			<h1 class="site-title"><?php echo esc_html( single_post_title() ); ?></h1>
		<?php
	}



	/**
	 * Add archive filters
	 */
	public function blog_filters() {

		$categories = get_terms(
			array(
				'taxonomy'   => 'category',
				'hide_empty' => true,
			)
		);

		$current_category = isset( $_GET['category'] ) ? sanitize_key( $_GET['category'] ) : false;

		if ( $categories ) {
			?>
				<div class="site-filter blog-categories">
					<div class="filter">
					<?php foreach ( $categories as $category ) : ?>
						<a class="filter__item <?php echo esc_attr( $current_category === $category->slug ? 'current' : '' ); ?>" href="<?php echo esc_url( $current_category === $category->slug ? get_post_type_archive_link( 'post' ) : add_query_arg( 'category', $category->slug, get_post_type_archive_link( 'post' ) ) ); ?>">
							<?php echo esc_html( $category->name ); ?>
							<span class="count">
								<?php echo esc_html( $category->count ); ?>
							</span>
						</a>
					<?php endforeach; ?>
					</div>
				</div>
			<?php
		}
	}



	/**
	 * Open container for post loop
	 */
	public static function open_container() {
		?>
		<div class="blog-grid alignwide">
		<?php
	}



	/**
	 * Close container for post loop
	 */
	public static function close_container() {
		?>
		</div>
		<?php
	}



	/**
	 * Pagionation links
	 */
	public static function pagination() {
		global $wp_query;

		$total_pages = $wp_query->max_num_pages;

		if ( $total_pages > 1 ) {
			$current_page = max( 1, get_query_var( 'paged' ) );
			?>
				<div class="pagination pagination-blog">
					<?php
					echo paginate_links(
						array(
							'base'    => get_pagenum_link( 1 ) . '%_%',
							'format'  => 'page/%#%',
							'current' => $current_page,
							'total'   => $total_pages,
						)
					);
					?>
				</div>
			<?php
		}
	}



	/**
	 * Display single post within the loop from template file
	 */
	public static function loop_entry() {
		get_template_part( 'template-parts/blog/loop-entry' );
	}
}
