<?php

require get_theme_file_path("/inc/search_route.php");
require get_theme_file_path("/inc/like_route_endpoint.php");

// Enqueue theme scripts and styles
function boilerplate_load_assets()
{
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element', 'react-jsx-runtime'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
  wp_localize_script('ourmainjs', 'universityData', array(
    'root_url' => get_site_url(),
    'nonce' => wp_create_nonce('wp_rest'), // Security nonce for REST API
    'current_user_id' => get_current_user_id()
  ));
}
// Hook the function to load assets onto the 'wp_enqueue_scripts' action
add_action('wp_enqueue_scripts', 'boilerplate_load_assets');



// Add theme support for various features
function boilerplate_add_support()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_image_size("professorLandscape", 400, 260, true);
  add_image_size("professorPortrait", 480, 650, true);
}
// Hook the function to run after the theme setup is complete
add_action('after_setup_theme', 'boilerplate_add_support');



// Customize the excerpt length for posts

function custom_post_type_excerpt($excerpt)
{
  global $post;

  if ($post->post_type == "event") {
    return wp_trim_words($post->post_content, 20, '... <a href="' . get_permalink() . '">Read more</a>');
  } elseif ($post->post_type == 'post') {
    return wp_trim_words($post->post_content, 60, '... <a href="' . get_permalink() . '">Read blog</a>');
  }

  return $excerpt;
}


add_filter("get_the_excerpt", "custom_post_type_excerpt");



function adjust_default_queries($query)
{

  if (!is_admin() && is_post_type_archive("event") && $query->is_main_query()) {
    $today = date("Ymd");
    $query->set("meta_key", "event_date");
    $query->set("orderby", "meta_value_num");
    $query->set("order", "ASC");
    $query->set("posts_per_page", 5);
    $query->set("meta_query", [
      [
        "key" => "event_date",
        "compare" => ">=",
        "value" => $today,
        "type" => "numeric"
      ]
    ]);
  }
  if (!is_admin() && is_post_type_archive("campus") && $query->is_main_query()) {
    $query->set("posts_per_page", 5);
  }

  if (!is_admin() && is_home() && $query->is_main_query()) {
    $query->set("posts_per_page", 5);
  }
}

add_action("pre_get_posts", "adjust_default_queries");


function redirectSubsToFrontend()
{
  $ourCurrentUser = wp_get_current_user();
  if (count($ourCurrentUser->roles) == 1 && $ourCurrentUser->roles[0] == "subscriber") {
    wp_redirect("/");
    exit;
  }
}


add_action("admin_init", "redirectsubsToFrontend");




function hideAdminBarForSubscribers()
{
  $ourCurrentUser = wp_get_current_user();
  if (count($ourCurrentUser->roles) == 1 && $ourCurrentUser->roles[0] == "subscriber") {
    show_admin_bar(false);
  }
}

add_action("after_setup_theme", "hideAdminBarForSubscribers");
