function sequenceExists(main, seq) {
    let i = 0;
    while (i < main.length) {
        if (seq[0] === main[i] && seq[1] === main[i + 1]) {
            return true;
        }
        i++;
    }
    return false;
}
let main = [20, 7, 8, 10, 2, 5, 6];
const case1 = sequenceExists(main, [7, 8]);
const case2 = sequenceExists(main, [8, 7]);
const case3 = sequenceExists(main, [7, 10]);
const case4 = sequenceExists(main, [1, 4]);
console.log(case1, case2, case3, case4);
