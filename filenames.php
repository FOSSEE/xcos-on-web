<?php

/*
 * @jiteshjha
 * filenames.php returns the names of all the files in a given folder
 */

// Store the filenames
$filenameArray = [];

// Get the folder to be operated
$url = $_POST['url'];

// Reference: http://php.net/manual/en/function.opendir.php
// Open the file directory and get the filehandle
$handle = opendir(dirname(realpath(__FILE__)).$url);

// For each file in the folder, push the filename to filenameArray
while($file = readdir($handle)){
    if($file !== '.' && $file !== '..'){
        array_push($filenameArray, "$url$file");
    }
}

// Return the file name array in JSON format
echo json_encode($filenameArray);
?>
