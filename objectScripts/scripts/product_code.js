// let part1 = {
//     supplierCode: "",
//     productNumber: "",
//     size: ""
// }
// parsePartCode(part1);


function parsePartCode(code) {
    const index = code.indexOf(":");
    return code.substring(0, index);
}

function parsePartCodeMiddle(code) {
    const index = code.lastIndexOf("-");
    return code.substring((":" + 1),index);
}

function parsePartCodeEnd(code) {
    const index = code.lastIndexOf("-");
    return code.substring(index + 1);

}

let code = "XYZ:1234-L";
console.log(parsePartCode(code));
console.log(parsePartCodeMiddle(code));
console.log(parsePartCodeEnd(code));