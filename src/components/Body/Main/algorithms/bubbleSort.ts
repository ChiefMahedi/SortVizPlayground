export default function bubbleSort(sequence: number[]): number[][]
{
        const arr = [...sequence];
        const s = [];
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
              s.push([i, j]);
              const temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
        }
        return s;
}