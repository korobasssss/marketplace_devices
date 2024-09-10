
import styles from './styles.module.scss'
import {FooterComponent, HeaderComponent} from "../../base";


export const MainComponent = () => {
    return (
        <div
            className={styles.main_section}
        >
            <HeaderComponent isCartIcon isFavoritesIcon/>
            <main>data</main>
            <FooterComponent/>
        </div>
    )
}