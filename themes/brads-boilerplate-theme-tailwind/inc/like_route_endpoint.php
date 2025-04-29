<?php
add_action("rest_api_init", function ($data) {
    register_rest_route("university/v1", "like", [
        "methods" => 'GET',
        "callback" => "university_like_endpoint_callback"
    ]);

    register_rest_route('university/v1', 'manageLike', array(
        'methods' => 'POST',
        'callback' => 'createLike',
    ));

    register_rest_route('university/v1', 'manageLike', array(
        'methods' => 'DELETE',
        'callback' => 'deleteLike',
    ));
});

function createLike($data)
{
    $professor = sanitize_text_field($data->get_param("term"));

    $existsQuery = new WP_Query([
        "author" => get_current_user_id(),
        "post_type" => "like",
        "meta_query" => [
            [
                "key" => "liked_professor_id",
                "compare" => "=",
                "value" =>  $professor
            ]
        ],
    ]);

    if ($existsQuery->found_posts == 0 && get_post_type($professor) == "professor") {
        wp_insert_post([
            "post_type" => "like",
            "post_status" => "publish",
            "post_title" => "Like Created",
            "meta_input" => [
                "liked_professor_id" => $professor
            ]
        ]);
        return "Like Created.";
    } else {
        die("Invalid professor id.");
    }
}


function university_like_endpoint_callback($data)
{
    $like_query = new WP_Query([
        "post_type" => "like",
        "meta_query" => [
            [
                "key" => "liked_professor_id",
                "compare" => "=",
                "value" => $data->get_param("term"),
            ],
        ],
    ]);

    return $like_query->post_count;
}

function deleteLike($data)
{

    $likeId = sanitize_text_field($data->get_param("like"));
    if (get_current_user_id() === get_post_field("post_author", $likeId)) {
        wp_delete_post($likeId, true);
    } else {
        wp_die("You do not have permission to delete this like.", "Permission Denied", array('response' => 403));
    }
}
