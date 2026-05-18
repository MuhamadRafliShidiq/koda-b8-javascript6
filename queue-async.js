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

async function main() {
    try {
        const name1 = await queue(3, "John");
        console.log(name1);
        const name2 = await queue(4, "Ed");
        console.log(name2);
        const name3 = await queue(1, "Jane");
        console.log(name3);
    } catch (errorMsg) {
        console.log(`Error : ${errorMsg}`);
    }
}

main();