<?php

/**
 * Check if theme is in development environment
 *
 * @return bool
 */
function is_development() {
	if ( ( defined( 'WP_ENV' ) && 'development' === WP_ENV ) || WP_DEBUG ) {
		return true;
	}
	return false;
}



/**
 * Get theme version
 *
 * @return float
 */
function get_theme_version() {
	return (float) wp_get_theme()->get( 'Version' );
}



/**
 * Get theme css styles directory
 *
 * @return string
 */
function get_styles_directory() {
	if ( is_development() ) {
		return get_template_directory() . '/app/css/';
	}
	return get_template_directory() . '/dist/css/';

}



/**
 * Get styles directory url
 *
 * @return string
 */
function get_styles_uri() {
	if ( is_development() ) {
		return get_template_directory_uri() . '/app/css/';
	}
	return get_template_directory_uri() . '/dist/css/';
}



/**
 * Get theme js scripts directory
 *
 * @return string
 */
function get_scripts_directory() {
	if ( is_development() ) {
		return get_template_directory() . '/app/js/';
	}
	return get_template_directory() . '/dist/js/';
}



/**
 * Get scripts directory url
 *
 * @return string
 */
function get_scripts_uri() {
	if ( is_development() ) {
		return get_template_directory_uri() . '/app/js/';
	}
	return get_template_directory_uri() . '/dist/js/';
}



/**
 * Get svg directory url
 *
 * @return string
 */
function get_svg_uri() {
	if ( is_development() ) {
		return get_template_directory_uri() . '/app/svg/';
	}
	return get_template_directory_uri() . '/dist/svg/';
}



/**
 * Get svg file content from filename or full url.
 *
 * @param string $url Full url or just filename with extension.
 *
 * @return string
 */
function inline_svg( $url ) {

	if ( ! filter_var( $url, FILTER_VALIDATE_URL ) ) {
		$url = get_svg_uri() . $url;
	}

	$file = wp_remote_get( $url );

	$code = wp_remote_retrieve_response_code( $file );

	if ( 200 === $code ) {
		$file_type = wp_remote_retrieve_header( $file, 'content-type' );
		if ( 'image/svg+xml' === $file_type ) {
			$file_content = wp_remote_retrieve_body( $file );
			return $file_content;
		}
	}
}
