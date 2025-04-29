<?php get_header(); ?>

<header class="h-[50vh] bg-cover bg-center bg-gradient-to-r from-slate-200 to-green-300 px-40 pt-40">
  <div class="container mx-auto"></div>
  <h1 class="text-6xl font-bold mb-4 text-gray-800">Our Blogs</h1>
  <p class="text-2xl font-bold text-gray-700">
    Welcome to our university page. We are committed to providing world-class education and fostering innovative thinking.
  </p>
  </div>
</header>

<?php while (have_posts()) : the_post(); ?>

  <div class="px-40 py-8 border-b border-gray-200">
    <a href="<?php the_permalink(); ?>">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4 hover:text-cyan-400"><?php the_title(); ?></h1>
    </a>
    <div class="text-lg text-gray-700 leading-relaxed"><?php the_excerpt(); ?></div>
  </div>

<?php endwhile; ?>

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


<?php get_footer(); ?>