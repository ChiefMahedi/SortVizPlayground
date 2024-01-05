export default function bubbleSort(sequence: number[]): number[][]
{
        const arr = [...sequence];
        const swaps = [];
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
              swaps.push([i, j]);
              const temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
        }
        return swaps;
}