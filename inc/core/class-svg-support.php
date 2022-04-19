<?php
namespace WLC\Core;

class Svg_Support {

	/**
	 * Integrate with WordPress hooks and filters
	 */
	public function enable() {
		add_filter( 'wp_check_filetype_and_ext', array( $this, 'svg_upload' ), 10, 4 );
		add_filter( 'upload_mimes', array( $this, 'svg_mime_type' ) );
		add_action( 'admin_head', array( $this, 'fix_svg_thumb_display' ) );
	}



	/**
	 * Add svg mime types to supported
	 *
	 * @param array $mimes .
	 *
	 * @return array $mimes .
	 */
	public function svg_mime_type( $mimes ) {

		$mimes['svg']  = 'image/svg+xml';
		$mimes['svgz'] = 'image/svg+xml';

		return $mimes;

	}



	/**
	 * Adds support for svg file upload
	 *
	 * @param mixed $data .
	 * @param mixed $file .
	 * @param mixed $filename .
	 * @param mixed $mimes .
	 *
	 * @return array
	 */
	public function svg_upload( $data, $file, $filename, $mimes ) {

		global $wp_version;

		if ( '4.7.1' === $wp_version ) {
			return $data;
		}

		$filetype = wp_check_filetype( $filename, $mimes );

		return array(
			'ext'             => $filetype['ext'],
			'type'            => $filetype['type'],
			'proper_filename' => $data['proper_filename'],
		);
	}



	/**
	 * Fix media uploader svg thumbnail display
	 */
	public function fix_svg_thumb_display() {
		?>
			<style type="text/css">
				td.media-icon img[src$=".svg"], img[src$=".svg"].attachment-post-thumbnail {
				width: 100% !important; height: auto !important;
				}
			</style>
		<?php
	}

}
