const fetchData = document.getElementById("fetch");
const xhr = document.getElementById("xhr");

fetchData.addEventListener('click', function() {
fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            displayData.innerHTML = ('data.inputTitle');
            displayData.innerHTML = ('data.inputBody');

        })
        .catch(error => {
            displayData.textContent = `Error: ${error.message}`;
        });
    });


    xhr.addEventListener("click", function() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/2");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { 
            if (xhr.status === 200) { 
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                displayData.innerHTML = ('data.inputTitle');
                displayData.innerHTML = ('data.inputBody');
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        }
    };

    xhr.send();
});


