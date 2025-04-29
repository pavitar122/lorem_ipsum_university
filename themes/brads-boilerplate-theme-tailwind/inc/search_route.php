<?php
add_action("rest_api_init", "university_register_search");

function university_register_search()
{
    register_rest_route("university/v1", "search", [
        "methods" => WP_REST_SERVER::READABLE,
        "callback" => "university_search_results"
    ]);
}


function university_search_results($data)
{
    $mainQuery = new WP_Query([
        "post_type" => ["professor", "page", "post", "event", "campus", "program"],
        "posts_per_page" => -1,
        "s" => sanitize_text_field($data["term"])
    ]);

    $results = [
        "generalInfo" => [],
        "professors" => [],
        "events" => [],
        "campuses" => [],
        "programs" => []
    ];

    while ($mainQuery->have_posts()) {
        $mainQuery->the_post();


        if (get_post_type() == "post" || get_post_type() == "page") {
            array_push($results["gaeneralInfo"], [
                "postType" => get_post_type(),
                "authorName" => get_the_author(),
                "title" => get_the_title(),
                "permalink" => get_the_permalink()
            ]);
        } elseif (get_post_type() == "professor") {
            $relatedPrograms = get_field("related_programs");
            if (is_array($relatedPrograms) || is_iterable($relatedPrograms)) {
                foreach ($relatedPrograms as $program) {
                    array_push($results["programs"], [
                        "id" => get_the_ID(),
                        "title" => get_the_title($program),
                        "permalink" => get_the_permalink($program),
                    ]);
                }
            }
            array_push($results["professors"], [
                "title" => get_the_title(),
                "permalink" => get_the_permalink(),
                "image" => get_the_post_thumbnail_url(0, 'professorLandcape')
            ]);
        } elseif (get_post_type() == "campus") {
            array_push($results["campuses"], [
                "title" => get_the_title(),
                "permalink" => get_the_permalink(),
            ]);
        } elseif (get_post_type() == "program") {
            $relatedCampus = get_field("related_campuses");
            if (is_array($relatedCampus) || is_iterable($relatedCampus)) {
                foreach ($relatedCampus as $campus) {
                    array_push($results["campuses"], [
                        "title" => get_the_title($campus),
                        "permalink" => get_the_permalink($campus)
                    ]);
                }
            }
            array_push($results["programs"], [
                "id" => get_the_ID(),
                "title" => get_the_title(),
                "permalink" => get_the_permalink(),
            ]);
        } elseif (get_post_type() == "event") {
            $relatedPrograms = get_field("related_programs");
            if (is_array($relatedPrograms) || is_iterable($relatedPrograms)) {
                foreach ($relatedPrograms as $program) {
                    array_push($results["programs"], [
                        "id" => get_the_ID(),
                        "title" => get_the_title($program),
                        "permalink" => get_the_permalink($program),
                    ]);
                }
            }
            array_push($results["events"], [
                "title" => get_the_title(),
                "permalink" => get_the_permalink(),
                "date" => get_the_date(),
                "content" => get_the_content(),
                "excerpt" => get_the_excerpt()
            ]);
        }


        $programsMetaQuery = [];

        if ($results["programs"]) {
            $programsMetaQuery = [
                "relation" => "OR",
            ];
        }

        foreach ($results["programs"] as $program) {

            array_push($programsMetaQuery, [
                "key" => "related_programs",
                "compare" => "LIKE",
                "value" => '"' . $program["id"] . '"'
            ]);
        }

        $programRelationshipQuery = new WP_Query([
            "post_type" => ["professor", "event"],
            "meta_query" => $programsMetaQuery
        ]);

        while ($programRelationshipQuery->have_posts()) {
            $programRelationshipQuery->the_post();
            if (get_post_type() == "professor") {
                array_push($results["professors"], [
                    "title" => get_the_title(),
                    "permalink" => get_the_permalink(),
                    "image" => get_the_post_thumbnail_url(0, 'professorLandcape')
                ]);
            } elseif (get_post_type() == "event") {
                array_push($results["events"], [
                    "title" => get_the_title(),
                    "permalink" => get_the_permalink(),
                    "date" => get_the_date(),
                    "content" => get_the_content(),
                    "excerpt" => get_the_excerpt()
                ]);
            }
        }
    }

    $results["professors"] = array_values(array_unique($results["professors"], SORT_REGULAR));
    $results["events"] = array_values(array_unique($results["events"], SORT_REGULAR));
    $results["programs"] = array_values(array_unique($results["events"], SORT_REGULAR));



    return $results;
}
