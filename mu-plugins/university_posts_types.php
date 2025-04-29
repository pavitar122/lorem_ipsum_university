<?php
function university_posts_types()
{

  register_post_type("event", [
    "public" => true,
    "menu_icon" => "dashicons-calendar",
    "has_archive" => true,
    "rewrite" => ["slug" => "events"],
    "labels" => [
      "name" => "Events",
      "add_new_item" => "Add new Event",
      "edit_item" => "Edit Event",
      "all_items" => "All Events",
      "Singular_name" => "Event"
    ]
  ]);


  register_post_type("program", [
    "public" => true,
    "menu_icon" => "dashicons-list-view",
    "has_archive" => true,
    "rewrite" => ["slug" => "programs"],
    "labels" => [
      "name" => "Programs",
      "add_new_item" => "Add new Program",
      "edit_item" => "Edit Program",
      "all_items" => "All Programs",
      "Singular_name" => "Program"
    ]

  ]);

  register_post_type("professor", [
    "public" => true,
    "supports" => ["thumbnail", "title", "editor"],
    "menu_icon" => "dashicons-welcome-learn-more",
    "labels" => [
      "name" => "Professors",
      "add_new_item" => "Add new Professor",
      "edit_item" => "Edit Professor",
      "all_items" => "All Professors",
      "Singular_name" => "Professor"
    ]
  ]);

  register_post_type("campus", [
    "public" => true,
    "has_archive" => true,
    "supports" => ["title", "editor"],
    "menu_icon" => "dashicons-location-alt",
    "labels" => [
      "name" => "Campuses",
      "add_new_item" => "Add new Campus",
      "edit_item" => "Edit Campus",
      "all_items" => "All Campuses",
      "singular_name" => "Campus"
    ]
  ]);


  register_post_type("note", [
    "capability_type" => "note",
    "map_meta_cap" => true,
    "supports" => ["title", "editor",  'author'],
    "public" => false,
    "show_ui" => true,
    'show_in_rest' => true,
    "menu_icon" => "dashicons-welcome-write-blog",
    "labels" => [
      "name" => "Notes",
      "add_new_item" => "Add new Note",
      "edit_item" => "Edit Note",
      "all_items" => "All  Notes",
      "singular_name" =>  "Note"
    ]
  ]);


  register_post_type("like", [
    "supports" => ["title"],
    "public" => false,
    "show_ui" => true,
    "menu_icon" => "dashicons-heart",
    "labels" => [
      "name" => "Likes",
      "add_new_item" => "Add new Like",
      "edit_item" => "Edit Like",
      "all_items" => "All Likes",
      "singular_name" => "Like"
    ]
  ]);
}


add_action("init", "university_posts_types");
