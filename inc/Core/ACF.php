<?php
namespace WLC\Core;

class ACF {

	/**
	 * Integrate with WordPress hooks and filters
	 */
	public function hooks() {
		add_filter( 'acf/settings/save_json', array( $this, 'acf_json_save_point' ) );
		add_filter( 'acf/settings/load_json', array( $this, 'acf_json_load_point' ) );
	}



	/**
	 * Automatic saving of the json file with configuration of acf fields on the plugin side.
	 *
	 * @param  string $path .
	 * @return string
	 */
	public function acf_json_save_point( $path ) {
		return get_stylesheet_directory() . '/acf';
	}



	/**
	 * Loading changes from json file to sync.
	 *
	 * @param  string $paths .
	 * @return string|array $paths .
	 */
	public function acf_json_load_point( $paths ) {
		unset( $paths[0] );
		$paths[] = get_stylesheet_directory() . '/acf';
		return $paths;
	}

}
