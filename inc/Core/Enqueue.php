<?php
namespace WLC\Core;

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
	 * @param string $handle
	 * @param string $file
	 * @param array $deps
	 * @param false $version
	 * @param bool $in_footer
	 */
	public function enqueue_script( string $handle, string $file, array $deps = array(), $version = false, $in_footer = true ) {
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
	}



}
