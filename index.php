<?php
/**
 * Default page template
 * This template is based on Genesis Theme hooks,
 * You can use such hooks from this guide https://genesistutorials.com/visual-hook-guide/,
 * just replace 'genesis_' prefix with 'il_'.
 *
 * @package wlc-starter
 * @author  Mateusz Major
 * @link    https://whitelabelcoders.com/
 */

get_header();
?>

<div class="site-inner">

	<?php do_action( 'wlc_before_content_sidebar_wrap' ); ?>

	<main>
		<?php do_action( 'wlc_before_content' ); ?>

		<?php if ( have_posts() ) : ?>
			<?php do_action( 'wlc_before_loop' ); ?>
			<?php while ( have_posts() ) : ?>
				<?php the_post(); ?>
				<?php do_action( 'wlc_entry' ); ?>
			<?php endwhile; ?>
			<?php do_action( 'wlc_after_loop' ); ?>
		<?php endif; ?>

		<?php do_action( 'wlc_after_content' ); ?>
	</main>

	<?php do_action( 'wlc_sidebar' ); ?>

	<?php do_action( 'wlc_after_content_sidebar_wrap' ); ?>

</div>

<?php
get_footer();
