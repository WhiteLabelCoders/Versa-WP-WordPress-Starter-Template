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

require_once __DIR__ . '/inc/Core/Helpers.php';
require_once __DIR__ . '/vendor/autoload.php';

$setup = new WLC\Core\Theme();
$setup->hooks();
$setup->class_loader(
	array(
		'WLC\Blocks\SimpleBlock',
		'WLC\Components\Header',
		'WLC\Components\Footer',
		'WLC\Components\LoopPosts',
		'WLC\Views\Page',
		'WLC\Views\Blog',
		'WLC\Views\SinglePost',
		'WLC\Views\HomePage',
	)
);
