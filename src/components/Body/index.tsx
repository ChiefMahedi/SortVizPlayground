import Main from "./Main";
import Sidebar from "./Sidebar";
import style from "./index.module.css"
export default function Body() {
    return (
        <>
            <div className={style['main-body']}>
                <Main />
                <Sidebar />
            </div>
        </>
    )
}