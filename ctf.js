function checkAnswer(correctAnswer, nextPage) {
    var answer = document.getElementById('answer').value.trim();
    var resultDiv = document.getElementById('result');
    
    // Check if the answer is correct
    if (answer === correctAnswer) {
        resultDiv.textContent = 'Correct! Well done.';
        document.getElementById('nextButtonDiv').style.display = 'block';  // Show Next button

        document.getElementById('nextButton').addEventListener('click', function() {
            window.location.href = nextPage;  // Redirect to the next stage (passed as parameter)
        });
    } else {
        resultDiv.textContent = 'Incorrect. Please try again!';
    }
}
