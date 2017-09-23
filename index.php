<?php
//Setup environment define
if ($_SERVER['SERVER_NAME'] == 'lucaspenney.dev') {
  define('ENVIRONMENT', 'development');
} else define ('ENVIRONMENT', 'production');

session_start();
//Define version based on git hash

$v = substr(`git rev-parse --verify HEAD`, 0, 6);
?>
<!DOCTYPE html>
<html lang="en" class="no-js" ng-app="app">
<head>
  <meta charset="utf-8">

  <title>Lucas Penney</title>
  <meta name="description" content="Portfolio website of Lucas Penney">
  <meta name="viewport" content="width=device-width">
  <link href='http://fonts.googleapis.com/css?family=Lato:200,400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/bower_components/angular-motion/dist/angular-motion.min.css">
  <link rel="stylesheet" href="/bower_components/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="/bower_components/angular-material/angular-material.min.css">
  <link rel="stylesheet" href="/bower_components/bootstrap-material-design/dist/css/roboto.min.css">
  <link rel="stylesheet" href="/bower_components/bootstrap-material-design/dist/css/ripples.css">
  <link rel="stylesheet" href="/css/main.css">
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-8545012-13']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
</head>
<body class='fade-in' ng-controller="navController">
  <div class="site-wrapper">
    <div class="navbar" role="navigation">
      <div class="wrapper">
        <div class="half pull-left">
          <a class="site-title" href="/about" angular-ripple>Lucas Penney </a>
          <a ng-click="toggleMenu()" href="#" class="hamburger"><i class="fa fa-bars fa-2x"></i></a>
        </div>
        <div class="half pull-right text-centered">
          <ul ng-style="menuStyle" class="navigation-links pull-left">
            <a ng-click="closeMenu()" href="{{item.link}}" ng-repeat="item in navLinks"><li angular-ripple><i class="fa fa-fw smalltext" ng-class="item.icon"></i> {{item.name}}</li></a>
          </ul>
        </div>
      </div>
    </div>

    <ng-view class="container-fluid content" ng-class="viewAnimation"></ng-view>

    <div class='footer' ng-controller="footerController">
      <div class="footer-image"></div>
        &copy; <?php echo date("Y") ?> Lucas Penney Some Rights Reserved Probably
    </div>
    <?php if (ENVIRONMENT == "development"): ?>
      <script src="/bower_components/jquery/dist/jquery.min.js"></script>
      <script src="/bower_components/angular/angular.js"></script>
      <script src="/bower_components/angular-route/angular-route.min.js"></script>
      <script src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
      <script src="/bower_components/angular-animate/angular-animate.min.js"></script>
      <script src="/bower_components/angular-aria/angular-aria.js"></script>
      <script src="/bower_components/angular-material/angular-material.js"></script>
      <script src="/bower_components/angular-ripple/angular-ripple.js"></script>
      <script src="/bower_components/threejs/build/three.js"></script>
      <script src="/bower_components/lodash/lodash.js"></script>
      <script src="/app/app.js?v=<?php echo $v?>"></script>
      <script src="/app/templates.js?v=<?php echo $v?>"></script>
      <?php else: ?>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="/bower_components/jquery/dist/jquery.min.js"><\/script>')</script>
        <script src="/app/app.js?v=<?php echo $v; ?>"></script>
        <script src="/app/templates.js?v=<?php echo $v?>"></script>
      <?php endif; ?>
      </div>
      <!-- <background class="canvas-background"></background> -->
    </body>
  </html>
