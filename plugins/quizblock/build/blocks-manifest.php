<?php
// This file is generated. Do not modify it manually.
return array(
	'quizblock' => array(
		'name' => 'create-block/my-block-name',
		'title' => 'My Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A custom block with React',
		'attributes' => array(
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#e0f2fe'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#0369a1'
			),
			'name' => array(
				'type' => 'string',
				'default' => 'Pavitar Singh'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'my-block-name',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
