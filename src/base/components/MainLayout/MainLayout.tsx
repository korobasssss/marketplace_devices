import {IWithClassName} from "../../interfaces";
import {FC, ReactElement, ReactNode} from "react";
import styles from './styles.module.scss'
import {FooterComponent, HeaderComponent} from "../../../module/base";
import {ScrollWrapper} from "../";

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
        <ScrollWrapper>
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
        </ScrollWrapper>
    )
}