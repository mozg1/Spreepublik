<div id="about" class="actualcontent">
	<main id="main" class="site-main" role="main">
		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();
		?>
		<div class="titles"><h1><?=the_title(); ?></h1></div>
		<div class="post" id="post-245">
           <?php
			the_content();
			?>
        </div>
		<?php
			// End of the loop.
		endwhile;
		?>

	</main><!-- .site-main -->
</div><!-- .actualcontent -->