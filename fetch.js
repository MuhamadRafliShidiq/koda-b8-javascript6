// Mengambil data menggunakan fetch Async-Await dan mengubah uppercase string dari email ke lowercase
async function getEmail() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        const result = await response.json();
        const email = result.map((user) => user.email.toLowerCase());
        console.log("Async-Await");
        console.log(email);
    } catch (error) {
        console.error(error.message);
    }
}
getEmail();

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) =>
        response.json())
    .then((data) => {
        const email = data.map((user) => user.email.toLowerCase());
        console.log("Then-Catch");
        console.log(email);
    })
    .catch((error) => console.error(error.message));
