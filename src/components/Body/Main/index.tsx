import { useEffect } from 'react';
import style from './index.module.css';
import bubbleSort from './algorithms/bubbleSort';
import mergeSort from './algorithms/mergeSort';
interface MainProps {
    sequence: number[];
    alterSequence: React.Dispatch<React.SetStateAction<number[]>>;
    algorithm: string;
    changeAlgorithm: React.Dispatch<React.SetStateAction<string>>;
}
export default function Main(props: MainProps) {
    //Upon mounting the component generate a random sequence
    useEffect(() => {
        generateSequence();
    }, []);
    //To handle the sort button event
    function handleSort(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (props.algorithm === 'bubblesort') {
            animateBubbleSort();
        }
        if (props.algorithm === 'mergesort') {
            animateMergeSort();
        }
    }
    //To generate a new sequence 
    function generateSequence() {
        const temp = [];
        for (let i = 0; i < 100; i++) {
            temp.push(Math.floor(Math.random() * 315));
        }
        props.alterSequence(temp);
    }

    function handleGenerateSequence(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        generateSequence();
    }

    function handleAlgorithmChange(e: React.ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();
        props.changeAlgorithm(e.target.value);
    }
    //To animate the merge sort
    async function animateMergeSort() {
        const swapsForMergeSort = mergeSort(props.sequence.slice(), 0, props.sequence.length - 1);
        for (let i = 0; i < swapsForMergeSort.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 8));
            props.alterSequence((currentSequence) => {
                const [index, value] = swapsForMergeSort[i];
                const newSequence = [...currentSequence];
                newSequence[index] = value;
                return newSequence;
            });
        }
    }
    //To animate the bubble sort
    async function animateBubbleSort() {
        const swapsForBubbleSort = bubbleSort(props.sequence);
        for (let i = 0; i < swapsForBubbleSort.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 8));
            //alterSequence is setSequence from Body component
            props.alterSequence((sequence) => {
                const [x, y] = swapsForBubbleSort[i];
                const newSequence = [...sequence];
                [newSequence[x], newSequence[y]] = [newSequence[y], newSequence[x]];
                return newSequence;
            });
        }
    }

    const bars = props.sequence.map((value: number, index: number) => (
        <div
            key={index}
            style={{
                height: value,
                width: '15px',
                backgroundColor: 'rgb(71, 175, 179)',
                border: '1px solid white',
            }}
        ></div>
    ));

    return (
        <>
            <main className={style['main-content']}>
                <div className={style['sorting-area']}>
                    {bars}
                </div>
                <div className={style['sort-control']}>
                    <div className={style['choose-algo']}>
                        <label htmlFor="algorithm" className={style['select-algo-label']}>
                            Choose an <span className={style['algo-text']}>algorithm</span>
                        </label>
                        <select id="algorithm" className={style['select-algo']} onChange={handleAlgorithmChange}>
                            <option value="bubblesort">Bubble Sort</option>
                            <option value="mergesort">Merge Sort</option>
                        </select>
                    </div>
                    <button className={style['gen-seq-btn']} onClick={handleGenerateSequence}>
                        Generate Sequence
                    </button>
                    <button className={style['sort-seq-btn']} onClick={handleSort}>
                        Sort Sequence
                    </button>
                </div>
            </main>
        </>
    );
}
