const fetchData = document.getElementById("fetch");
const xhr = document.getElementById("xhr");
const form = document.getElementById("myForm");
const title = document.getElementById("inputTitle");
const body = document.getElementById("inputBody");
const displayData = document.getElementById("displayData");
const updateForm = document.getElementById("updateForm");
const updateId = document.getElementById("inputId");
const updateTitle = document.getElementById("updateTitle");
const updateBody = document.getElementById("updateBody");


fetchData.addEventListener('click', function() {
fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            displayData.innerHTML = `
                <p>Title: ${data.title}</p>
                <p>Body: ${data.body}</p>`

        })
        .catch(error => {
            displayData.textContent = `Error: ${error.message}`;
        });
    });


    xhr.addEventListener("click", function() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/2");

    xhr.onreadystatechange = function() {
            if (xhr.status === 200) { 
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                displayData.innerHTML = `
                <p>Title: ${data.title}</p>
                <p>Body: ${data.body}</p>`
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        
    };

    xhr.send();
});


    form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const titleValue = title.value;
    const bodyValue = body.value;


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, body })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to submit data");
            }
            return response.json();
        })
        .then(data => {
            displayData.innerHTML = `
                <p>Title: ${data.title}</p>
                <p>Body: ${data.body}</p>
               
            `;
        })
        .catch(error => {
            displayData.textContent = `Error: ${error.message}`;
        });
});

updateForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const idChange = updateId.value;
    const titleChange = updateTitle.value;
    const bodyChange = updateBody.value;

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `https://jsonplaceholder.typicode.com/posts/${idChange}`);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayData.innerHTML = `
                    <p>Updated Title: ${data.title}</p>
                    <p>Updated Body: ${data.body}</p>`;
            } else {
                displayData.textContent = `Error: ${xhr.statusText}`;
            
        }
    };

    xhr.send(JSON.stringify({ title: titleChange, body: bodyChange }));
});


