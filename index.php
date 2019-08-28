<?php
//Setup environment define
if ($_SERVER['SERVER_NAME'] == 'lucaspenney.localhost') {
	define('ENVIRONMENT', 'development');
} else {
	define ('ENVIRONMENT', 'production');
}

session_start();
//Define version based on git hash
$v = substr(`git rev-parse --verify HEAD`, 0, 6);
?>
<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
	<meta charset="utf-8">
	<title>Lucas Penney</title>
	<meta name="description" content="Lucas Penney">
	<meta name="viewport" content="width=device-width">
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/css/main.css?v=<?php echo $v?>">
	<?php if (ENVIRONMENT == "production"): ?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-8545012-13"></script>
	<script>
	window.dataLayer = window.dataLayer || [];

	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());
	gtag('config', 'UA-8545012-13');
	</script>
	<?php endif; ?>
</head>

<body class="fade-in">
	<div id="react-app"></div>
	<script src="/build/app.js?v=<?php echo $v?>"></script>
</body>

</html>