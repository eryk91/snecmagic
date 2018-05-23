<!DOCTYPE html>
<html lang="pl">
<head>
  <title>SNECStudio</title>
  <meta name="description" content="SNECStudio - Zespół tworzący profesjonalne strony internetowe z pasją. Serdecznie zapraszamy" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="keywords" content="snecstudio, snec, studio, programowanie, strony, internetowe, stron, tania, dobra, strona, www" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="shortcut icon" type="image/png" href="images/icon.png"/>
  <meta name="theme-color" content="#E2810A">
  <meta name="msapplication-navbutton-color" content="#E2810A">
  <meta name="apple-mobile-web-app-status-bar-style" content="#E2810A">
  <link rel="stylesheet" type="text/css" href="css/main.css" />
  <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
  <script type="text/javascript" src="js/functions.js"></script>
</head>
<body>
  <div id="preloader"><div id="preloader-circle"></div></div>
  <header class="slide0">
    <h1>SNEC<span>Studio</span></h1>
    <p>Zespół tworzący profesjonalne strony internetowe z pasją</p>
    <div id="scrollArrow" onclick="scrollarrow()"></div>
  </header>

  <section class="slide1">
    <h2>Kim jesteśmy?</h2>
    <p>
      Jesteśmy zespołem programistów zajmujących się stronami internetowymi.
      Podejmujemy się różnych prac z nimi powiązanych.
      Oferujemy tworzenie stron internetowych, ich przebudowę,
      drobne naprawy, a także wykonujemy unikalne portfolia
      i lekkie portale internetowe.
      Staramy się nie podejmować prac związanych z większymi projektami,
      gdyż nas zespół nie jest liczny.
    </p>
    <div id="overwrap">
      <div class="circle">Design</div>
      <div class="circle" style="margin-right: 2vw;">Code</div>
      <div class="circle">Prepare</div>
      <div class="circle">Publish</div>
    </div>
    <div id="scrollArrow1" onclick="scrollarrow1()"></div>
  </section>

  <section class="slide2">
    <h2>Zobacz nasze dotychczasowe projekty</h2>
    <div id="overwrap">
      <div class="square">First Example</div>
      <div class="square">Second Example</div>
      <div class="square">Third Example</div>
    </div>
    <div id="scrollArrow2" onclick="scrollarrow2()"></div>
  </section>

  <section class="slide3">
   <?php

   ini_set('SMTP', 'ssl://smtp.gmail.com');
   ini_set('SMTP', 'smtp.gmail.com');
   ini_set('smtp_port', '465');
   ini_set('username', 'snecstudio@gmail.com');
   ini_set('password', 'gcaz&muak');
   ini_set('sendmail_from', 'snecstudio@gmail.com');

   if (!empty($_REQUEST['email']) and !empty($_REQUEST['tytul']) and !empty($_REQUEST['info'])) {

       $admin_email = "snecstudio@gmail.com";
       $email       = $_REQUEST['email'];
       $tytul       = $_REQUEST['tytul'];
       $info        = $_REQUEST['info'];

       if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

           mail($admin_email, "'$tytul' Od: '$email'", $info);
           echo "<h2>Dziękujemy za wiadomość!</h2>";
       }

       else {
   ?>
           <h2>Napisz do nas</h2>
       <form id="mail" method="post">

         <input name="email" type="text" placeholder="Twój e-mail:" /> <br />
         <input name="tytul" type="text" placeholder="Tytuł:" /> <br />
         <textarea name="info" placeholder="Twoja wiadomość do nas:"></textarea>

         <input type="submit" value="Wyślij" />
         <div style="clear: both"></div>
         <div id="left">E-mail: <br /><a href="mailto:snecstudio@gmail.com">snecstudio@gmail.com</a></div>
         <div id="right">Kontakt telefoniczny: <br /> +48 070 000 000</div>
         <div style="clear: both"></div>
       </form>
    <?php
       }
   }

   else {
   ?>
       <h2>Napisz do nas</h2>
       <form id="mail" method="post">

         <input name="email" type="text" placeholder="Twój e-mail" /> <br />
         <input name="tytul" type="text" placeholder="Tytuł" /> <br />
         <textarea name="info" placeholder="Wiadomość do nas."></textarea>

         <input type="submit" value="Wyślij" />
         <div style="clear: both"></div>
         <div id="left">E-mail: <br /><a href="mailto:snecstudio@gmail.com">snecstudio@gmail.com</a></div>
         <!--<div id="right">Kontakt telefoniczny: <br /> +48 000 000 000</div>-->
         <div style="clear: both"></div>
       </form>

       <?php
   }
   ?>
    <div id="scrollArrow3" onclick="scrollarrow3()"></div>
  </section>
  <footer>
	<div>
		<a href="mailto:snecstudio@gmail.com">Powered by <b style="color: #e2810a">SNEC</b><b style="color:#e2810a;text-decoration:unset;font-size: unset;">Studio</b> © <?php echo date("Y"); ?></a>
	</div>
</footer>
</body>
</html>
