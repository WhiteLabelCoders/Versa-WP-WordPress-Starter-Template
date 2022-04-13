<?php
namespace WLC\Core;

use WLC\Views\Page;

trait Enqueue {

	/**
	 * Wrapper for enqueue style.
	 *
	 * @param string $handle Unique name of the stylesheet.
	 * @param string $file   Filename or url to file.
	 * @param array $deps    Dependencies.
	 * @param false $version File version.
	 * @param string $media  Media type.
	 */
	public function enqueue_style( string $handle, string $file, array $deps = array(), $version = false, string $media = 'all' ) {
		$src = $file;
		if ( ! filter_var( $file, FILTER_VALIDATE_URL ) ) {
			$src = get_styles_uri() . $file;
			if ( ! $version && file_exists( get_styles_directory() . $file ) ) {
				$version = filemtime( get_styles_directory() . $file );
			}
		}
		if ( ! $version ) {
			$version = get_theme_version();
		}
		wp_enqueue_style(
			$handle,
			$src,
			$deps,
			$version
		);
	}



	/**
	 * Wrapper for enqueue script.
	 *
	 * @param string       $handle     File ID.
	 * @param string       $file       File name (app.js) if it is placed within app/js directory or whole path to file if in other directory.
	 * @param string[]     $deps       Array of dependencies like for e.g. array( 'jquery' ).
	 * @param false|string $version    Script version.
	 * @param bool         $in_footer  Place script in footer?
	 * @param string[]     $attributes Array of additional attributes like for e.g. array( 'defer', 'async', crossorigin => 'anonymous' );
	 */
	public function enqueue_script( string $handle, string $file, array $deps = array(), $version = false, bool $in_footer = true, array $attributes = array() ) {
		$src = $file;
		if ( ! filter_var( $file, FILTER_VALIDATE_URL ) ) {
			$src = get_scripts_uri() . $file;
			if ( ! $version && file_exists( get_scripts_directory() . $file ) ) {
				$version = filemtime( get_scripts_directory() . $file );
			}
		}
		if ( ! $version ) {
			$version = get_theme_version();
		}
		wp_enqueue_script(
			$handle,
			$src,
			$deps,
			$version,
			$in_footer
		);
		if ( $attributes ) {
			add_filter( 'script_loader_tag', function( $filter_src, $filter_handle ) use ( $handle, $attributes ) {
				if ( $filter_handle === $handle ) {

					foreach( $attributes as $name => $value ) {
						if ( is_string( $name ) ) {
							if ( false === strpos( $filter_src, $name ) ) {
								$filter_src = str_replace( '<script', '<script ' . $name . '="' . $value . '"', $filter_src );
							} else {
								$filter_src = preg_replace('\''. $name .'=\\\'.*\\\'\'', $name . '=\''. $value .'\'', $filter_src );
							}
						} else {
							if ( false === strpos( $filter_src, $value ) ) {
								$filter_src = str_replace( '<script', '<script ' . $value, $filter_src );
							}
						}
					}

					return $filter_src;

				}
			}, 10, 2 );
		}
	}




}
