Score  = 0;
function UpdateScore()
{
    Score = Score + 1;
    document.getElementById("Score").innerHTML = "Score: " + Score;
}

function saveScore()
{
    localStorage.setItem("Score", Score);
}

function nextPage()
{
    window. localStorage = "indext.html";
}