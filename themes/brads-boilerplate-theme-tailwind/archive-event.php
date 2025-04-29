<?php get_header(); ?>


<header class="h-[50vh] bg-cover bg-center bg-gradient-to-r from-slate-200 to-green-300 px-40 pt-40">
    <div class="container mx-auto"></div>
    <h1 class="text-6xl font-bold mb-4 text-gray-800">Upcoming Events</h1>
    <p class="text-2xl font-bold text-gray-700">
        Welcome to our university page. We are committed to providing world-class education and fostering innovative thinking.
    </p>
    </div>
</header>


<?php if (have_posts()): ?>
    <?php while (have_posts()): the_post(); ?>

        <div class="container mx-auto my-8 px-40 p-6 ">
            <h1 class="text-3xl font-semibold text-gray-800 mb-2"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
            <span class="text-gray-600 text-lg"><?php the_excerpt(); ?></span>
            <span class="block mt-2 text-sm text-gray-500 italic"><?php echo date("d-m-Y", strtotime(get_field("event_date"))); ?></span>
        </div>

    <?php endwhile; ?>
<?php endif; ?>

<div class="pagination flex justify-center py-10 ">
    <?php
    the_posts_pagination(array(
        'mid_size'             => 2,
        'prev_text'            => '<span class="px-4 py-2 bg-gray-200 text-gray-800 rounded-l hover:bg-gray-300">« Prev</span>',
        'next_text'            => '<span class="px-4 py-2 bg-gray-200 text-gray-800 rounded-r hover:bg-gray-300">Next »</span>',
        'before_page_number'   => '<span class="mx-1 px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300">',
        'after_page_number'    => '</span>',
    ));
    ?>
</div>

<div class="flex justify-center mb-10  ">
    <span class="text-lg text-gray-700">
        <a href="<?php echo esc_url(site_url('/past-events')); ?>" class="text-blue-500 hover:underline font-semibold">
            Click here
        </a>
        to see the events that have passed.
    </span>
</div>





<?php get_footer(); ?>