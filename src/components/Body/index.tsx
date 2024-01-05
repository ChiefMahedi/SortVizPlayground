import Main from "./Main";
import Sidebar from "./Sidebar";
import style from "./index.module.css";
import { useState } from "react";

export default function Body() {
    const [sequence, setSequence] = useState<number[]>([]); 
    const [sortAlgorithm, setSortAlgorithm] = useState<string>('Bubble Sort');
    return (
        <>
            <div className={style['main-body']}>
                <Main
                    sequence={sequence}
                    alterSequence={setSequence}
                    algorithm={sortAlgorithm}
                    changeAlgorithm={setSortAlgorithm}
                />
                <Sidebar algorithm = {sortAlgorithm} />
            </div>
        </>
    );
}
