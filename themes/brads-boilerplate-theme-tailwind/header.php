<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

  <nav class="sticky top-0 z-50 shadow-lg bg-white">
    <div class="flex justify-between items-center p-4 px-10">
      <div class="text-gray-800 text-2xl">
        <a href="<?php echo esc_url(site_url('/')); ?>" class="hover:text-gray-600">Lorem Ipsum University</a>
      </div>
      <div class="w-130" id="render-react-search-here"></div> <!-- Increased width from w-50 to w-80 -->
      <ul class="flex space-x-6">
        <li><a href="<?php echo esc_url(site_url('/about')); ?>" class="text-gray-700 hover:text-gray-900">About Us</a></li>
        <li><a href="<?php echo get_post_type_archive_link("program") ?>" class="text-gray-700 hover:text-gray-900">Programs</a></li>
        <li><a href="<?php echo get_post_type_archive_link("campus") ?>" class="text-gray-700 hover:text-gray-900">Campuses</a></li>
        <li><a href="<?php echo get_post_type_archive_link("event") ?>" class="text-gray-700 hover:text-gray-900">Events</a></li>
        <li><a href="<?php echo esc_url(site_url('/blogs')); ?>" class="text-gray-700 hover:text-gray-900">Blogs</a></li>

        <?php if (is_user_logged_in()) { ?>
          <li><a href="<?php echo wp_logout_url(); ?>" class="text-gray-700 hover:text-gray-900">Logout</a></li>
          <li><a href="<?php echo esc_url(site_url("my-notes")); ?>" class="text-gray-700 hover:text-gray-900">My Notes</a></li>
        <?php } else { ?>
          <li><a href="<?php echo wp_login_url(); ?>" class="text-gray-700 hover:text-gray-900">Login</a></li>
          <li><a href="<?php echo site_url('/wp-signup.php'); ?>" class="text-gray-700 hover:text-gray-900">Signup</a></li>
        <?php } ?>

      </ul>
  </nav>