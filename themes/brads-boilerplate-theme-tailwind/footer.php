<footer class="bg-gray-100 text-gray-800 py-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <a href="<?php echo esc_url(home_url('/')); ?>" class="text-2xl font-bold hover:text-gray-600"><?php bloginfo('name'); ?></a>
          <p class="mt-2 text-gray-600"><?php bloginfo('description'); ?></p>
          <p class="mt-2 text-gray-600">1234 Lorem Ipsum Street, Suite 100, Ipsum City, AB 12345</p>
          <p class="mt-1 text-gray-600">Email: info@example.com | Phone: (123) 456-7890</p>
        </div>
        <ul class="flex space-x-6">
          <li><a href="/about" class="hover:text-gray-600">About Us</a></li>
          <!-- Other links -->
        </ul>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-300 pt-4">
        <div class="mb-4 md:mb-0 text-sm text-gray-600">
          Follow us:
          <a href="https://facebook.com" class="hover:text-gray-800 ml-2">Facebook</a>
          <!-- Other social links -->
        </div>
        <div class="text-sm text-gray-600">
          <p>&copy; <?php echo date("Y"); ?> <?php bloginfo('name'); ?>. All Rights Reserved.</p>
        </div>
      </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
