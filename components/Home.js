import styles from "@/styles/Home.module.css";

export function Home() {
    return (
        <> < header className = {styles.w3DisplayContainer+ ' ' + styles.w3Content+ ' ' + styles.w3Center} style = {{maxWidth:"1500px"}} > <img
        className={styles.w3Image}
            src="https://www.ciokorea.com/sites/default/files/images/GettyImages-522146634.jpg"
            alt="Me"
            width="1300"
            height="600"/>
        <div
            className={styles.w3DisplayMiddle + ' ' + styles.w3PaddingLarge + ' ' + styles.w3Border + ' ' + styles.w3Wide + ' ' + styles.w3TextLightGrey + ' ' + styles.w3Center}>
            <h1 className={styles.w3HideMedium+ ' ' +styles.w3HideSmall+ ' ' +styles.w3Xxxlarge}>Jeongmyeong Hong</h1>
            <h3 className={styles.w3HideMedium+ ' ' +styles.w3HideSmall}>DEVELOPER</h3>
        </div>

        <div
            className={styles.w3Bar+ ' ' +styles.w3LightGrey+ ' ' +styles.w3Round+ ' ' +styles.w3DisplayBottommiddle+ ' ' +styles.w3HideSmall}
            style={{bottom:"-16px"}}>
            <a href="https://github.com/JeongMyeongHong" className={styles.w3BarItem+ ' ' +styles.w3Button}>Git Hub</a>
        </div>
        <div
        className={styles.w3Bar+ ' ' +styles.w3LightGrey+ ' ' +styles.w3Round+ ' ' +styles.w3DisplayBottommiddle+ ' ' +styles.w3HideSmall}
        style={{bottom:"-16px"}}>
        <a href="https://hjm9210.notion.site/BitCamp-8c8bec6738644635bfa1a0cf84be8b3b" className={styles.w3BarItem+ ' ' +styles.w3Button}>Notion</a>
    </div>
    </header>
</>
    )
}