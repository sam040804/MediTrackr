<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $location = $_POST['location'];
    echo "<h2>Donors in $location</h2>";
    echo "<ul><li>Sample Donor 1 - O+ - 9876543210</li>";
    echo "<li>Sample Donor 2 - A+ - 9871234560</li></ul>";
}
?>
