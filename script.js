const fetchData = document.getElementById("fetch");
const xhr = document.getElementById("xhr");

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

