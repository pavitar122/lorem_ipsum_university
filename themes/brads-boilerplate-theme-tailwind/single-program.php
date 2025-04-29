<?php get_header(); ?>

<?php while (have_posts()) : the_post(); ?>

    <header class="h-[50vh] bg-cover bg-center bg-gradient-to-r from-blue-200 to-green-300  px-4  md:px-8 pt-32">
        <div class="max-w-6xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold mb-4 text-gray-800"><?php the_title(); ?></h1>
            <p class="text-lg md:text-2xl font-semibold text-gray-700 max-w-3xl">
                Welcome to our university page. We are committed to providing world-class education and fostering innovative thinking.
            </p>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 md:px-0 py-10 bg-white">
        <div class="prose lg:prose-xl max-w-none">
            <?php the_content(); ?>
        </div>

        <?php
        $args = [
            "post_type" => "professor",
            "posts_per_page" => -1,
            "orderby" => "date",
            "order" => "DESC",
            "meta_query" => [
                [
                    "key" => "related_programs",
                    "compare" => "LIKE",
                    "value" => '"' . get_the_ID() . '"'
                ]
            ],
        ];
        $related_professors = new WP_Query($args);

        if ($related_professors->have_posts()) : ?>
            <section class="my-16">
                <h2 class="text-3xl font-bold mb-8 text-gray-800">Related Professors</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <?php while ($related_professors->have_posts()) : $related_professors->the_post(); ?>
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
                    <?php endwhile; ?>
                </div>
            </section>
        <?php 
        wp_reset_postdata();
        endif; ?>

        <?php
        $today = date("Ymd");
        $args = [
            "post_type" => "event",
            "posts_per_page" => 3,
            "orderby" => "meta_value_num",
            "meta_key" => "event_date",
            "order" => "ASC",
            "meta_query" => [
                [
                    "key" => "event_date",
                    "compare" => ">=",
                    "value" => $today,
                    "type" => "numeric",
                ],
                [
                    "key" => "related_programs",
                    "compare" => "LIKE",
                    "value" => '"' . get_the_ID() . '"'
                ]
            ],
        ];
        $related_events = new WP_Query($args);

        if ($related_events->have_posts()) : ?>
            <section class="my-16">
                <h2 class="text-3xl font-bold mb-8 text-gray-800">Upcoming Events</h2>
                <div class="grid gap-6">
                    <?php while ($related_events->have_posts()) : $related_events->the_post(); ?>
                        <div class="p-6 border rounded-lg hover:bg-gray-50 transition-colors">
                            <a href="<?php the_permalink(); ?>" class="text-lg font-semibold text-blue-600 hover:text-blue-800">
                                <?php the_title(); ?>
                            </a>
                            <div class="mt-2 text-gray-600">
                                <?php
                                $eventDate = new DateTime(get_field('event_date'));
                                echo $eventDate->format('M j, Y');
                                ?>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </section>
        <?php 
        wp_reset_postdata();
        endif; ?>

    </main>

<?php endwhile; ?>

<?php get_footer(); ?>