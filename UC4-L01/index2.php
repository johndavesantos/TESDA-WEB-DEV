<?php 

	$stringOne = 'my email is ';
	$stringTwo = 'dave12345@outmail.com';

	echo $stringOne.$stringTwo;

	$name = 'dave';

	// concatenation
	echo 'Hi, my name is '.$name;

	// variable interpolation
	echo "Hi, my name is $name"; 

	// escaping characters
	echo "the ninja screamed \"whaaa\"";
	echo 'the ninja scream "whaaa"';

	// get single characters
	echo $name[1];

	// string functions
	echo strlen($name);
	echo strtoupper($name);
	echo strtolower($name);
	echo str_replace('d', 'w', $name);

?>

<!DOCTYPE html>
<html>
<head>
	<title>PHP Tutorials</title>
</head>
<body>

	<p><?php echo $name; ?></p>

</body>
</html>