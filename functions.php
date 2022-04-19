<?php
/**
 * WLC Starter
 *
 * @package WLC-theme
 * @author  Mateusz Major
 * @link    https://WLC.pl/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
};

require_once __DIR__ . '/inc/core/helpers.php';
require_once __DIR__ . '/inc/core/autoloader.php';

$setup = new WLC\Core\Theme();
$setup->hooks();
$setup->class_loader(
	array(
		'WLC\Blocks\Simple_Block',
		'WLC\Components\Header',
		'WLC\Components\Footer',
		'WLC\Components\Loop_Posts',
		'WLC\Views\Page',
		'WLC\Views\Blog',
		'WLC\Views\Single_Post',
		'WLC\Views\Home_Page',
	)
);
