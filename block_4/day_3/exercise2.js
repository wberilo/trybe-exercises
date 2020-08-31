let n = 5;
let out = ""
for (let j = 0; j < n; j++) {
    out = "";
    for (let i = 0; i < j + 1 ; i++) {
        out+="*";
    }
    console.log(out);
}