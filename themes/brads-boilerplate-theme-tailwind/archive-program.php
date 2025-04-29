<?php get_header(); ?>

<header class="h-[50vh] bg-cover bg-center bg-gradient-to-r from-slate-200 to-green-300 px-40 pt-40">
    <div class="container mx-auto">
        <h1 class="text-6xl font-bold mb-4 text-gray-800">Programs Available</h1>
        <p class="text-2xl font-bold text-gray-700">
            Explore the diverse range of programs offered by our university, designed to inspire and empower students for a brighter future.
        </p>
    </div>
</header>

<div class="container mx-auto px-20 py-8">
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6">

        <?php if (have_posts()): ?>
            <?php while (have_posts()): the_post(); ?>

                <div class="bg-white rounded-xl shadow-md overflow-hidden ">
                    <div class="p-6">
                      

                        <!-- Program Title -->
                        <h2 class="text-xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors duration-200">
                            <a href="<?php the_permalink(); ?>" class="hover:underline"><?php the_title(); ?></a>
                        </h2>

                        <!-- Program Details -->
                        <div class="space-y-3 text-gray-700">
                            <!-- Department -->
                            <div class="flex items-center">
                                <?php
                                $related_campuses = get_field("related_campuses");
                                if ($related_campuses && is_array($related_campuses)) {
                                    foreach ($related_campuses as $campus) {
                                        echo '<svg class="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 5h1m4-5h1m-1 5h1m-5 5v-5h1m4 0v5" />
                                            </svg>';
                                        echo '<a href="' . get_the_permalink($campus) . '"><span>' . wp_trim_words(get_the_title($campus), 6) . '</span></a>';
                                    }
                                }
                                ?>
                            </div>

                            <!-- Duration -->
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span><?php echo the_field('duration'); ?> Years</span>
                            </div>
                        </div>

                        <!-- Divider -->
                        <hr class="my-4 border-gray-300">

                        <!-- Application Deadline -->
                      
                    </div>

                    <!-- Apply Button -->
                    <div class="px-6 py-4 bg-gray-100 border-t border-gray-200">
                        <a href="<?php the_permalink(); ?>" class="w-full inline-block text-center px-4 py-2 bg-gray-800 text-white hover:shadow-lg transition-shadow duration-300">
                            Learn More
                        </a>
                    </div>
                </div>

            <?php endwhile; ?>
        <?php endif; ?>

    </div>
</div>



<?php get_footer(); ?>