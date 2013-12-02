exports.naive = function(S) {
    // S must be a square matrix
    var n = S.length;
    var D = function(x,y) {
        if (x < 1 || x > n) {
            return Infinity;
        } else if (y == n) {
            return S[i(x)][i(n)];
        }
        return Math.min.apply(null,[D(x-1,y+1),D(x,y+1),D(x+1,y+1)])
                + S[i(x)][i(y)];
    };
    return D;
}

function i(n) { return n-1; }
