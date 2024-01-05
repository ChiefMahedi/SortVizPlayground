//Merge sort algorithm implementation
export default function mergeSort(
  array: number[],
  p: number,
  r: number,
  swaps: number[][] = []
): number[][] {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(array, p, q, swaps);
    mergeSort(array, q + 1, r, swaps);
    merge(array, p, q, r, swaps);
  }
  return swaps;
}

function merge(
  array: number[],
  p: number,
  q: number,
  r: number,
  swaps: number[][]
) {
  const n1 = q - p + 1;
  const n2 = r - q;
  const L: number[] = new Array(n1 + 1);
  const R: number[] = new Array(n2 + 1);

  for (let i = 0; i < n1; i++) {
    L[i] = array[p + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = array[q + j + 1];
  }

  L[n1] = Infinity;
  R[n2] = Infinity;

  let i = 0;
  let j = 0;

  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      swaps.push([k, L[i]]);
      i++;
    } else {
      array[k] = R[j];
      swaps.push([k, R[j]]);
      j++;
    }
  }
}
