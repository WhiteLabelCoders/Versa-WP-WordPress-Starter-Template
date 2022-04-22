<?php
/**
 * Autoload function.
 *
 * @package wlc-starter.
 * @author  Mateusz Major
 * @link    https://whitelabelcoders.com/
 */

/**
 * Autoload function.
 *
 * @param string $class_name .
 */
function wlc_autoload( $class_name ) {
	if ( false === strpos( $class_name, 'WLC' ) ) {
		return;
	}

	$file_parts = explode( '\\', $class_name );

	$namespace = '';

	for ( $i = count( $file_parts ) - 1; $i > 0; $i-- ) {
		$current = strtolower( $file_parts[ $i ] );
		$current = str_ireplace( '_', '-', $current );

		if ( count( $file_parts ) - 1 === $i ) {
			if ( strpos( strtolower( $file_parts[ count( $file_parts ) - 1 ] ), 'interface' ) ) {
				$interface_name = explode( '_', $file_parts[ count( $file_parts ) - 1 ] );
				$interface_name = strtolower( $interface_name[0] );
				$file_name      = "interface-$interface_name.php";
			} elseif ( strpos( strtolower( $file_parts[ count( $file_parts ) - 1 ] ), 'trait' ) ) {
				$trait_name = explode( '_', $file_parts[ count( $file_parts ) - 1 ] );
				$trait_name = strtolower( $trait_name[0] );
				$file_name  = "trait-$trait_name.php";
			} else {
				$file_name = "class-$current.php";
			}
		} else {
			$namespace = '/' . $current . $namespace;
		}
		$filepath  = trailingslashit( dirname( dirname( __FILE__ ) ) . $namespace );
		$filepath .= $file_name;
	}
	if ( file_exists( $filepath ) ) {
		require_once $filepath;
	} else {
		wp_die(
			esc_html( "The file attempting to be loaded at $filepath does not exist." )
		);
	}
}

spl_autoload_register( 'wlc_autoload' );
