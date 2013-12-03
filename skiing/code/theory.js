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

exports.dynamic = function(S) {
    // S must be a square matrix
    var n = S.length;
    var Ds = initDs(n);
    function initDs(n) {
        var t = new Array(n);
        for (var i = 0; i < n; i++) {
            t[i] = new Array(n);
            for (var j = 0; j < n; j++) {
                t[i][j] = null;
            }
        }
        return t;
    }
    // S must be a square matrix                                    
    var n = S.length;                                          
    var D = function(x,y) { 
        if (x < 1 || x > n) {
            return Infinity;
        } else if (y == n) {
            return S[i(x)][i(n)];
        } else if (Ds[i(x)][i(y)]) {
            return Ds[i(x)][i(y)];
        }
        return (Ds[i(x)][i(y)] = Math.min.apply(null,[D(x-1,y+1),D(x,y+1),D(x+1,y+1)])
                + S[i(x)][i(y)]);
    };
    return D;
}

function i(n) { return n-1; }
