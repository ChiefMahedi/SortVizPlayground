import style from './index.module.css';
import algorithmDetails from './algorithmDetails.json';

interface SideBar {
    algorithm: string;
}

export default function Sidebar(props: SideBar) {
    const selectedDetails = algorithmDetails.algorithms.find(
        algorithm => algorithm.name === props.algorithm
    );

    return (
        <>
            <aside className={style['sidebar-content']}>
                <div className={style['algo-desc']}>
                    <h1 className={style['algo-desc-title']}>{selectedDetails?.name}</h1>
                    <p className={style['algo-desc-details']}>{selectedDetails?.description}</p>
                </div>
                <div className={style['algo-comp']}>
                    <h2 className={style['algo-comp-title']}>Complexity</h2>
                    <table className={style['complexity-table']}>
                        <thead>
                            <tr>
                                <th>Case</th>
                                <th>Time Complexity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Worst Case</td>
                                <td>{selectedDetails?.complexity.worst_case}</td>
                            </tr>
                            <tr>
                                <td>Best Case</td>
                                <td>{selectedDetails?.complexity.best_case}</td>
                            </tr>
                            <tr>
                                <td>Average Case</td>
                                <td>{selectedDetails?.complexity.average_case}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </aside>
        </>
    );
}
