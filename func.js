<script>
// Add event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    // Display details in desired format on web page
    var message = "Hi " + firstName + " " + lastName + ". You are now " + age + " and your gender is " + gender + ".";
    document.getElementById("output").textContent = message;
    
    // Populate combo box with inputted text
    var comboText = firstName + " " + lastName;
    var comboOption = document.createElement("option");
    comboOption.text = comboText;
    comboOption.value = comboText;
    document.getElementById("combo_box").add(comboOption);
    
   });
</script>