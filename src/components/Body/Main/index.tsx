import { useEffect, useState } from 'react';
import style from './index.module.css';
import bubbleSort from './algorithms/bubbleSort';

export default function Main({ sequence, alterSequence, algorithm, changeAlgorithm }) {
    const [sortFlag, setSortFlag] = useState(true);
    //Upon monting the component generate a random sequence
    useEffect(() => {
        generateSequence();
    }, []);
    //To handle the sort button event
    function handleSort(e) {
        setSortFlag(false);
        e.preventDefault();
        animateBubbleSort();
    }
    //To generate a new sequence 
    function generateSequence() {
        const temp = [];
        for (let i = 0; i < 100; i++) {
            temp.push(Math.floor(Math.random() * 315));
        }
        alterSequence(temp);
    }

    function handleGenerateSequence(e) {
        e.preventDefault();
        generateSequence();
    }

    function handleAlgorithmChange(e) {
        e.preventDefault();
        changeAlgorithm(e.target.value);
    }

    async function animateBubbleSort() {
        const swapsForBubbleSort = bubbleSort(sequence);
        for (let i = 0; i < swapsForBubbleSort.length ; i++) {
            await new Promise((resolve) => setTimeout(resolve, 8));
            //alterSequence is setSequence from Body component
            alterSequence((sequence) => {
                const [x, y] = swapsForBubbleSort[i];
                const newSequence = [...sequence];
                [newSequence[x], newSequence[y]] = [newSequence[y], newSequence[x]];
                return newSequence;
            });
        }
        setSortFlag(true);
    }

    const bars = sequence.map((value: number, index: number) => (
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
                    <button className={style['gen-seq-btn']} onClick={handleGenerateSequence} disabled={!sortFlag}>
                        Generate Sequence
                    </button>
                    <button className={style['sort-seq-btn']} onClick={handleSort} disabled={!sortFlag}>
                        Sort Sequence
                    </button>
                </div>
            </main>
        </>
    );
}
