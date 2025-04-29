<?php get_header(); ?>



<?php while (have_posts()) : the_post(); ?>


    <header class="h-[50vh] bg-cover bg-center bg-gradient-to-r from-blue-200 to-green-300">
        <div class="container mx-auto h-full relative px-40 pt-20">
            <!-- Thumbnail positioned absolutely so it doesn't affect text positioning -->
            <div class="absolute right-40 top-20 w-96">
                <article class="group relative transform transition duration-300 hover:-translate-y-1">
                    <a href="<?php the_permalink(); ?>" class="block rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                        <div class="relative aspect-square">
                            <?php echo get_the_post_thumbnail(
                                get_the_ID(),
                                'professorLandscape',
                                [
                                    'class' => 'w-full h-full object-cover',
                                    'loading' => 'lazy',
                                ]
                            ); ?>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <h3 class="text-white text-xl font-bold"><?php the_title(); ?></h3>
                            </div>
                        </div>
                    </a>
                </article>
            </div>

          

            <!-- Text content positioned normally -->
            <div class="relative h-full flex flex-col justify-center">
                <h1 class="text-6xl font-bold mb-4 text-gray-800"><?php the_title(); ?></h1>
                <p class="text-2xl font-bold text-gray-700 max-w-2xl">
                    Welcome to our university page. We are committed to providing world-class education and fostering innovative thinking.
                </p>
            </div>
        </div>
    </header>

    <div id="render-react-like-here" data-professor="<?php echo get_the_ID(); ?>"></div>

 


    <div class="container text-lg mx-auto mt-30 py-10 px-40 bg-white ">
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
        echo '<h2 class="text-3xl font-bold mb-4">Subjects Taught</h2>';
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