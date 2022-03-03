<?php
/**
 * Default sidebar template
 * Sidebar template is required by WordPress!
 *
 * This template is based on Genesis Theme hooks,
 * You can use such hooks from this guide https://genesistutorials.com/visual-hook-guide/,
 * just replace 'genesis_' prefix with 'il_'.
 *
 * @package wlc-starter
 * @version 1.0.0.
 * @author  Mateusz Major
 * @link    https://whitelabelcoders.com/
 */

?>
<aside class="site-sidebar" role="complementary">

	<?php do_action( 'wlc_before_sidebar_widget_area' ); ?>

	<?php if ( is_active_sidebar( 'main_sidebar' ) ) : ?>
		<?php dynamic_sidebar( 'main_sidebar' ); ?>
	<?php endif; ?>

	<?php do_action( 'wlc_after_sidebar_widget_area' ); ?>

</aside>