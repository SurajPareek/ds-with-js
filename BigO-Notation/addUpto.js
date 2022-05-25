
function withNaiveApproach(limit) {
  
    function addUpto(n) {
        let total = 0;
        for (let value = 1; value <= n; value++) {
            total += value;
        }
        return total;
    }
    const t1 = performance.now();
    console.log("result: ", addUpto(limit));
    const t2 = performance.now();
    console.log(`Time Elapsed  ${(t2 - t1) / 1000} seconds.`);
    console.log("With Naive Approach \n\n");
}


function withExpertApproach(limit) {
    console.log("With Expert Approach \n\n");
    function addUpto(n) {
        return n * (n + 1) / 2;
    }
    const t1 = performance.now();
    console.log("result: ", addUpto(limit));
    const t2 = performance.now();
    console.log(`Time Elapsed  ${(t2 - t1) / 1000} seconds.`);
    console.log("With Expert Approach \n\n");
}

const limit = 9999999999;
withNaiveApproach(limit);
withExpertApproach(limit);