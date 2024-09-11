import {IWithClassName} from "../../interfaces";
import {FC, ReactElement, ReactNode} from "react";
import styles from './styles.module.scss'
import {FooterComponent, HeaderComponent} from "../../../module/base";

interface IMainLayout
    extends IWithClassName {
    children: ReactNode | ReactElement;
}

export const MainLayout: FC<IMainLayout> = (
    {
        children
    }
) => {
    return (
        <div
            className={styles.main_section}
        >
            <div
                className={styles.main}
            >
                <HeaderComponent
                    isCartIcon
                    isFavoritesIcon
                    className={styles.container}
                />
                <div
                    className={styles.container}
                >
                    {children}
                </div>
                <FooterComponent/>
            </div>
        </div>

    )
}