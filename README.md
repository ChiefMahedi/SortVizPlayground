# SortVizPlayground
SortVizPlayground is a GitHub repository dedicated to visualizing sorting algorithms, showcasing the functionalities of various sorting algorithms. Developed using ReactJS and TypeScript, this project offers an interactive interface to demonstrate these algorithms' step-by-step sorting process. Users can observe real-time visualizations, gaining a deeper understanding of how these sorting methods operate and compare their efficiencies. 

## Table of Contents

- [How bubble sort algorithm is utilized in this project](#how-bubble-sort-algorithm-is-utilized-in-this-project)
- [How Merge sort algorithm is utilized in this project](#how-merge-sort-algorithm-is-utilized-in-this-project)
- [Installation](#installation)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## How bubble sort algorithm is utilized in this project
- Input: `sequence` is an array of numbers to be sorted.
- Create a copy of the input array `sequence` named arr to avoid modifying the original array.
- Initialize an empty array `swaps` to store the swapping indices.
- Perform nested loops:
    - Outer loop (`i`) iterates through the elements of the array from the first to the second-to-last element.
    - Inner loop (`j`) iterates through the elements after the current `i` element till the end of the array.
- Within the inner loop:
    - Compare elements `arr[i]` and `arr[j]`.
    - If arr[i] is greater than arr[j], swap the elements.
    - Store the indices of the swapped elements (`i` and `j`) in the `swaps` array.
- Continue this process, iterating through the entire array, comparing adjacent elements, and swapping them if necessary.
- Once the loops complete, the `swaps` array contains pairs of indices representing the swaps made during the sorting process.
- Return the `swaps` array, which represents the sequence of `swaps` needed to sort the input array.

Explanation of `animateBubbleSort()` Function:
- `swapsForBubbleSort` is obtained by calling the `bubbleSort` function on the `sequence` variable. This generates an array containing pairs of indices that represent the swapping operations required to sort the sequence.
- The function then iterates through each swap operation in `swapsForBubbleSort` using a for loop.
- Inside the loop: `await new Promise((resolve) => setTimeout(resolve, 8));`: This line introduces a delay of 8 milliseconds using a promise and setTimeout. This delay creates a visual effect, allowing for a step-by-step visualization of the sorting process.
- `alterSequence` is a function used to update the sequence for visualization purposes. It takes the current sequence, swaps the elements based on the indices obtained from swapsForBubbleSort, and returns a new sequence.
- The updated sequence is then set using `setSequence`, to reflect the swapping animation in the UI.

## How merge sort algorithm is utilized in this project
This implementation is for the Merge Sort algorithm, a divide-and-conquer algorithm used to sort arrays or lists. It divides the input array into smaller sub-arrays until each sub-array contains only one element, then merges those sub-arrays in a sorted manner.
### `mergeSort()` Function:
- Input Parameters: `array `is the array to be sorted, `p` and `r` denote the start and end indices of the array (initially,` p = 0 `and `r = array.length - 1`), and` swaps` is an optional parameter to keep track of swapping indices.
- Base Case: If the start index `p` is less than the end index `r`, the function continues recursively.
- Divide: It finds the midpoint `q` of the array using `Math.floor((p + r) / 2)` and divides the array into two parts: `array[p...q]` and `array[q+1...r]`.
- Recursive Calls: It recursively calls `mergeSort()` on the left (p...q) and right (q+1...r) halves of the array.
- Merge: After sorting the sub-arrays, it merges them using the `merge()` function.
### `merge()`Function:
- Input Parameters: `array`, `p`, `q`, and `r` are the same as in mergeSort, and swaps keeps track of the swapping indices.
- It initializes `n1` and `n2` as the sizes of the two sub-arrays to be merged.
- Two temporary arrays `L` and `R` are created to hold elements from the left and right sub-arrays, respectively.
- `L[n1]` and `R[n2]` are set to `Infinity` to act as sentinels to help in merging.
- It iterates through the sub-arrays while merging them in sorted order:
  - `i `and `j` are indices for arrays `L `and `R`, respectively.
  - For each element of `array[p...r]`, it compares elements from `L` and `R`, placing the smaller element into the array.
  - It also keeps track of the indices of elements being swapped by pushing `[index, value] `pairs into the `swaps` array.
- This implementation maintains an array of swapping indices (`swaps`) that can be used to visualize the sorting process step by step or to analyze the sequence of swaps performed during the Merge Sort algorithm execution.
### `animateMergeSort()` Function:
- Input: `sequence`  or array to be sorted.
- `swapsForMergeSort` is obtained by calling the `mergeSort() `function on a shallow copy of the `sequence` array. This function sorts the array and returns an array of swapping indices.
- The function then iterates through each swap operation in `swapsForMergeSort` using a for loop.
- Inside the loop:
   - `await new Promise((resolve) => setTimeout(resolve, 8));`: This line introduces a delay of 8 milliseconds using a promise and setTimeout. This delay creates a visual effect, allowing for a step-by-step visualization of the sorting process.
   - `alterSequence()` is a function used to update the sequence for visualization purposes. It takes the current sequence, retrieves the index and value of each swap operation from swapsForMergeSort, and updates the sequence accordingly.
- The updated sequence is then set using `setSequence` to reflect the swapping animation in the UI.
## Installation

To install and run this project locally, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/ChiefMahedi/SortVizPlayground.git
```
### Install Dependencies
Navigate to the project directory and install the required dependencies using npm:
```bash
npm install
```
### Start the Development Server
```bash
npm run dev
```
Access the application on http://localhost:5173/

## Contributing
If you'd like to contribute to this repository, feel free to fork it and submit a pull request.
## Technologies Used
[![React][React.js]][React-url]
[![TypeScript][TypeScript]][TS-url]
## Support
If you find this sorting visualization project helpful or interesting, consider giving it a star to show your support!
## License
This project is licensed under the [MIT License](LICENSE).

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB
[TS-url]: https://www.typescriptlang.org/
