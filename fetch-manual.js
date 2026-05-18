// Mengambil data menggunakan fetch then-catch dan mengubah uppercase string dari email ke lowercase secara manual (tanpa built-in function dan method)
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Object konversi uppercase ke lowercase
        const lowerCase = {
            "A": "a", "B": "b", "C": "c", "D": "d", "E": "e",
            "F": "f", "G": "g", "H": "h", "I": "i", "J": "j",
            "K": "k", "L": "l", "M": "m", "N": "n", "O": "o",
            "P": "p", "Q": "q", "R": "r", "S": "s", "T": "t",
            "U": "u", "V": "v", "W": "w", "X": "x", "Y": "y",
            "Z": "z"
        };

        // Array penampung email
        const listEmail = [];
        // Index array
        let arr = 0;

        // Loop data user
        for (let i = 0; i < data.length; i++) {

            let email = data[i].email;
            let convert = "";

            // Loop karakter email
            for (let j = 0; j < email.length; j++) {

                // Jika huruf uppercase
                if (lowerCase[email[j]]) {
                    convert += lowerCase[email[j]];
                } else {
                    convert += email[j];
                }
            }


            // Memasukkan data ke array tanpa push()
            listEmail[arr] = convert;

            // Tambah index manual
            arr++;
        }

        console.log("Then-Catch");
        console.log(listEmail);

    })
    .catch((error) => {
        console.log(error);
    });

// Mengambil data menggunakan fetch async-await dan mengubah uppercase string dari email ke lowercase secara manual (tanpa built-in function dan method)
async function getEmail() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        const result = await response.json();
        // Object konversi uppercase ke lowercase
        const lowerCase = {
            "A": "a", "B": "b", "C": "c", "D": "d", "E": "e",
            "F": "f", "G": "g", "H": "h", "I": "i", "J": "j",
            "K": "k", "L": "l", "M": "m", "N": "n", "O": "o",
            "P": "p", "Q": "q", "R": "r", "S": "s", "T": "t",
            "U": "u", "V": "v", "W": "w", "X": "x", "Y": "y",
            "Z": "z"
        };

        // Array penampung email
        const listEmail = [];
        // Index array
        let arr = 0;

        // Loop data user
        for (let i = 0; i < result.length; i++) {

            let email = result[i].email;
            let convert = "";

            // Loop karakter email
            for (let j = 0; j < email.length; j++) {

                // Jika huruf uppercase
                if (lowerCase[email[j]]) {
                    convert += lowerCase[email[j]];
                } else {
                    convert += email[j];
                }
            }


            // Memasukkan data ke array tanpa push()
            listEmail[arr] = convert;

            // Tambah index manual
            arr++;
        }

        console.log("Async-Await");
        console.log(listEmail);

    } catch (error) {
        console.error(error.message);
    }
}

getEmail();