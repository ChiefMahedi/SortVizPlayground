import style from './index.module.css';
export default function Footer() {
    return (
        <>
            <footer className={style["footer"]}>
                <p>
                    <a href="https://github.com/ChiefMahedi/SortVizPlayground" style={{textDecoration:"none", color:"gray"}} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>{" "}
                    | © {new Date().getFullYear()} Mahedi Hassan Shawon
                </p>
            </footer>
        </>
    )
}
