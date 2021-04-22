var isMonotonic = function(A) {
    if (A.length <= 2) return true
    let inc = true, dec = true;
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] > A[i+1]) inc = false
      if (A[i] < A[i+1]) dec = false
      if (!inc && !dec) return false
    }
    return true
  };