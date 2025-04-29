<?php
if (!function_exists('get_field')) {
    function get_field($selector, $post_id = false, $format_value = true) {
        return '';
    }
}

if (!function_exists('the_field')) {
    function the_field($selector, $post_id = false) {
        echo '';
    }
}
