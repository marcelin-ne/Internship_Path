document.getElementById('getFactBtn').addEventListener('click', getCatFact);

async function getCatFact(){
    const apiUrl = 'https://catfact.ninja/fact'; // API UR:L CAT
    try {
        const response = await fetch(apiUrl);
        const data  = await response.json();
        console.log(data);
        if (response.ok){
            displayFact(data.fact);
        } else {
            displayError("Sorry, we couldn't get the fact about cats ")
        }

    } catch (error) {
        displayError("Sorry, we couldn't get the fact. Please try again later.")
    }
}

function displayFact(fact){
    const factContainer = document.getElementById('factContainer');
    factContainer.textContent = fact;
}

function displayError(message){
    const factContainer = document.getElementById('factContainer');
    factContainer.textContent = 'Error: ' + message;
}