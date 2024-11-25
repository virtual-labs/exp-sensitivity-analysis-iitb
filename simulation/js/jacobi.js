function iterate(a, c) {
    let n = c.length;
    let x = [];
    let x1 = [];
    let x_pre = [];
    for (let i = 0; i < n; i++) {
        x[i] = 0;
        x_pre[i] = 0;
    }
    for (let itr = 0; itr < 10; itr++) {
        x1[itr] = [];
        for (let i = 0; i < n; i++) {
            let sum = c[i];
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    sum -= a[i][j] * x_pre[j];
                }
            }
            x[i] = sum / a[i][i];
            x1[itr][i] = x[i];
        }
        x_pre = x;
    }
    return (x1);
}
//# sourceMappingURL=jacobi.js.map