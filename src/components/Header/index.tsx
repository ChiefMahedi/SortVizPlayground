import style from './index.module.css'
export default function Header()
{
  return(
    <>
    <header className={style['header']}>
        <div className={style['logo-container']}>
            <h1>SortVizPlayground</h1>
        </div>
    </header>
    </>
  )
}