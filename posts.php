<?php

//Get the list of files

require 'vendor/autoload.php';

use League\CommonMark\CommonMarkConverter;

$converter = new CommonMarkConverter();

$files = glob("posts/*.md");
$posts = [];

foreach ($files as $file) {
	$fileContent = file_get_contents($file);
	//Get first line of post (the title)
	$title = substr($fileContent,0, strpos($fileContent, "\n"));
	$title = str_replace("#", "", $title);
	$slug = str_replace("posts/", "", $file);
	$slug = str_replace(".md", "", $slug);
	$content = $converter->convertToHtml($fileContent);

	$posts[] = ['title' => $title, 'slug' => $slug, 'content' => $content];
}

echo json_encode($posts);
