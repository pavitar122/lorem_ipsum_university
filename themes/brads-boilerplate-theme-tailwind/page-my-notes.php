<?php if (!is_user_logged_in()) {
    wp_redirect(esc_url("/"));
    exit;
} ?>

<?php get_header(); ?>



<header class="h-[50vh] bg-cover bg-center bg-gradient-to-r from-blue-200 to-green-300 px-40 pt-40">
    <div class="container mx-auto">
        <h1 class="text-6xl font-bold mb-4 text-gray-800">My Notes</h1>
        <p class="text-2xl font-bold text-gray-700">
            Welcome to our university page. We are committed to providing world-class education and fostering innovative thinking.
        </p>
    </div>
</header>

<div id="render-react-note-here"></div>



<?php get_footer();
