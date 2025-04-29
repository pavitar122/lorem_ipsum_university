<?php get_header(); ?>

<header class="h-[70vh] bg-cover bg-center" style="background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4)), url('<?php echo get_theme_file_uri("images/university.jpg") ?>');">
    <div class="text-center flex flex-col justify-center items-center h-full">
        <h1 class="text-6xl font-bold text-gray-800">
            Welcome to Lorem Ipsum University
        </h1>
        <p class="mt-4 text-lg text-gray-600">
            Empowering students to shape a brighter future through innovative education and research.
        </p>
        <a href="/about" class="inline-block mt-6 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition">
            Discover More
        </a>
    </div>
</header>

<?php
$today = date("Ymd");
$args = [
    "post_type" => "event",
    "posts_per_page" => 3,
    "orderBy" => "date",
    "order" => "DESC",
    "meta_key" => "event_date",
    "meta_query" => [
        [
            "key" => "event_date",
            "compare" => ">=",
            "value" => $today,
            "type" => "numaric",
        ],
    ],
];
$event_query = new WP_Query($args);
?>

<section class="flex bg-gray-50">
    <div class="flex-1/2 bg-amber-50 py-10 px-20 text-gray-800">
        <h1 class="text-2xl font-semibold text-center">Upcoming Events</h1>

        <?php if ($event_query->have_posts()): ?>
            <?php while ($event_query->have_posts()): $event_query->the_post(); ?>

                <div class="flex gap-5 items-center mt-5">
                    <div class="h-24 w-24 flex-none bg-blue-100 rounded-full flex flex-col justify-center items-center">
                        <span class="text-3xl font-semibold text-blue-600"><?php echo date("M", strtotime(get_field("event_date"))); ?></span>
                        <span class="text-2xl font-bold text-blue-800"><?php echo date("d", strtotime(get_field("event_date"))); ?></span>
                    </div>
                    <div>
                        <h1 class="text-2xl font-semibold"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
                        <p class="text-gray-600"><?php the_excerpt(); ?></p>
                    </div>
                </div>

            <?php endwhile; ?>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>

        <div class="text-center mt-8">
            <a href="<?php echo get_post_type_archive_link("event")?>" class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200">
                View All Events
            </a>
        </div>
    </div>

    <?php
    $args = [
        "post_type" => "post",
        "posts_per_page" => 3,
        "orderBy" => "date",
        "order" => "DESC"
    ];
    $post_query = new WP_Query($args);
    ?>



    <div class="flex-1/2 bg-amber-100 py-10 px-20 text-gray-800">
        <h1 class="text-2xl font-semibold text-center">Our Blogs</h1>


        <?php if ($post_query->have_posts()): ?>
            <?php while ($post_query->have_posts()): $post_query->the_post(); ?>

                <div class="flex gap-5  items-center mt-5">
                    <div class="h-24 w-24 flex-none bg-blue-100 rounded-full flex flex-col justify-center items-center">
                        <span class="text-3xl font-semibold text-blue-700"><?php echo get_the_date("M") ?></span>
                        <span class="text-2xl font-bold text-blue-900"><?php echo get_the_date("d") ?></span>
                    </div>
                    <div>
                        <h1 class="text-2xl font-semibold"><?php the_title(); ?></h1>
                        <p class="text-gray-600"><?php echo  wp_trim_words(get_the_excerpt(), 20, '... <a href="' . get_permalink() . '">Read more</a>'); ?></p>
                    </div>
                </div>

            <?php endwhile; ?>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>





        <div class="text-center mt-8">
            <a href="<?php echo get_post_type_archive_link("post")?>" class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200">
                View All Blogs
            </a>
        </div>
    </div>
</section>


<section>
    <div class="max-w-6xl mx-auto py-12">
        <h2 class="text-3xl font-bold text-center mb-8">Explore Our University Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <div class="mb-4 flex justify-center">
                    <svg class="w-12 h-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8zM19 16v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2M5 13h14M12 3v5" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">Innovative Learning</h3>
                <p class="text-gray-600 text-center">Engage with modern teaching methods and interactive courses that inspire creativity and success.</p>
            </div>
            <div class="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <div class="mb-4 flex justify-center">
                    <svg class="w-12 h-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l-2 2M9 6l-2 2m6 7h4m0 0l-2 2m2-2l-2-2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2h-3.586a2 2 0 01-1.414-.586l-1.414-1.414A2 2 0 0011.172 2H7a2 2 0 00-2 2v15a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">Cutting-edge Research</h3>
                <p class="text-gray-600 text-center">Participate in industry-leading research projects and contribute to groundbreaking discoveries.</p>
            </div>
            <div class="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <div class="mb-4 flex justify-center">
                    <svg class="w-12 h-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 00-8 0v4H5a1 1 0 000 2h1v5a1 1 0 001 1h10a1 1 0 001-1v-5h1a1 1 0 000-2h-3V7z" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">Vibrant Community</h3>
                <p class="text-gray-600 text-center">Be a part of a dynamic community that nurtures personal growth and lifelong connections.</p>
            </div>
        </div>
    </div>
</section>



<section class="slider">
    <!-- Slider Container -->
    <div class="relative h-[70vh] overflow-hidden rounded-lg">
        <!-- Slides -->
        <div
            class="absolute inset-0 transition-opacity duration-700 ease-linear"
            data-slide
            data-active
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); background-size: cover; background-position: center;">
        </div>
        <div
            class="absolute inset-0 opacity-0 transition-opacity duration-700 ease-linear"
            data-slide
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); background-size: cover; background-position: center;">

        </div>
        <div
            class="absolute inset-0 opacity-0 transition-opacity duration-700 ease-linear"
            data-slide
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); background-size: cover; background-position: center;">

        </div>

        <!-- Navigation Dots -->
        <div class="absolute top-4 left-1/2 -translate-x-1/2 flex space-x-2">
            <button
                class="w-3 h-3 rounded-full bg-white/70 hover:bg-white transition-colors"
                data-slide-indicator
                data-active></button>
            <button
                class="w-3 h-3 rounded-full bg-white/70 hover:bg-white transition-colors"
                data-slide-indicator></button>
            <button
                class="w-3 h-3 rounded-full bg-white/70 hover:bg-white transition-colors"
                data-slide-indicator></button>
        </div>
    </div>
</section>


<?php get_footer(); ?>