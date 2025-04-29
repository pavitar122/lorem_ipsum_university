<?php get_header(); ?>



<?php while (have_posts()) : the_post(); ?>


    <header class="h-[50vh] bg-cover bg-center bg-gradient-to-r from-blue-200 to-green-300 px-40 pt-40">
        <div class="container mx-auto"></div>
        <h1 class="text-6xl font-bold mb-4 text-gray-800"><?php the_title(); ?></h1>
        <p class="text-2xl font-bold text-gray-700">
            Welcome to our university page. We are committed to providing world-class education and fostering innovative thinking.
        </p>
        </div>
    </header>


    <div class="container text-lg mx-auto py-10 px-40 bg-white ">
        <div class="space-y-10">
            <?php the_content(); ?>
        </div>
    </div>


    <?php
    $related_programs = get_field("related_programs");
    if (!is_array($related_programs)) {
        $related_programs = [];
    }
    if (count($related_programs) > 0) {
        echo '<div class="related-programs py-10 px-40">';
        echo '<h2 class="text-3xl font-bold mb-4">Related Programs</h2>';
        echo '<ul class="list-disc pl-5">';
        foreach ($related_programs as $program) {
            echo '<li class="mb-2"><a href="' . get_permalink($program) . '" class="text-blue-500 hover:underline">' . get_the_title($program) . '</a></li>';
        }
        echo '</ul>';
        echo '</div>';
    }
    ?>


<?php endwhile; ?>


<?php get_footer(); ?>