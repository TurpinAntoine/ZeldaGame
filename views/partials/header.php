<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>
    <?= $title ?>
  </title>
  <link rel="stylesheet" href="<?= URL ?>src/css/style.min.css">
</head>

<body>
  <header>
    <header>
      <div class="menu">
        <nav class="header-container">
          <ul>
            <li><a href="home">home</a></li>
            <li><a href="add">Add poster</a>
            <li><a href="login">Log Out</a></li>
          </ul>
        </nav>

      </div>
    </header>
    <h1 class="title2">
      <?= $_SESSION["login"] ?>'s todo list</h1>
  </header>
