<?php
/**
 * Default header template
 * Header template is required by WordPress!
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

?><!DOCTYPE html>

<html <?php language_attributes(); ?>>

	<head>

		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
		<link rel="profile" href="https://gmpg.org/xfn/11">
		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?>>
		<?php wp_body_open(); ?>

		<?php do_action( 'wlc_before' ); ?>

		<div class="site-container">

			<?php do_action( 'wlc_before_header' ); ?>

			<header class="site-header">
				<?php do_action( 'wlc_header' ); ?>
			</header>

			<?php do_action( 'wlc_after_header' ); ?>
