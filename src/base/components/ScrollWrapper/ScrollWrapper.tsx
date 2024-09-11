import {IWithClassName} from "../../interfaces";
import {FC, ReactElement, ReactNode} from "react";
import styles from './styles.module.scss'

interface IScrollWrapper
    extends IWithClassName {
    children: ReactNode | ReactElement;
}

export const ScrollWrapper: FC<IScrollWrapper> = (
    {
        children
    }
) => {

    return (
        <div
            className={styles.scroll_wrapper}
        >
            {children}
        </div>
    )
}