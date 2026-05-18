// Membuat Program antrian (Queue) menggunakan Promise


// Menggunakan chaining then-catch
function queue(time, name) {
    function prog(resolve, reject) {
        if (typeof time !== "number") {
            switch (typeof time) {
                case "undefined":
                    reject("Waktu harus diisi");
                    break;
                case "string":
                    reject("Waktu harus berupa angka");
                    break;
                default:
                    reject("Parameter invalid atau error");
            }
            return;
        }
        setTimeout(() => {
            resolve(name);
        }, time * 500);
    }
    return new Promise(prog);
}
queue(3, "John")
    .then((name1) => {
        console.log(name1);
        return queue(4, "Ed");
    })
    .then((name2) => {
        console.log(name2);
        return queue(1, "Jane");
    })
    .then((name3) => {
        console.log(name3);
    })
    .catch((errorMsg) => {
        console.log(`Error : ${errorMsg}`);
    });
