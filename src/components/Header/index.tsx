import style from './index.module.css'
export default function Header()
{
  return(
    <>
    <header className={style['header']}>
        <div className={style['logo-container']}>
            <h1 className={style['logo']}><span className={style['logo-sort']}>Sort</span>VizPlayground</h1>
        </div>
        <div className={style['avatar-container']}>
            <h2 className={style['avatar-title']}>Developed by, Mahedi Hassan Shawon</h2>
            <img src='https://res.cloudinary.com/dncupqjwo/image/upload/v1703416683/avatar_fztd3e.png' className={style['avatar']} width="32px" height="32px"/>
        </div>
    </header>
    </>
  )
}