import {IWithClassName} from "../../interfaces";
import {FC, ReactNode} from "react";
import styles from './styles.module.scss'
import cx from "classnames";

interface ICenterMessage
    extends IWithClassName {
    children: ReactNode;
}

export const CenterMessage: FC<ICenterMessage> = (
    {
        className,
        children
    }
) => {
    return (
        <div
            className={cx(
                className,
                styles.section
            )}
        >
            {children}
        </div>
    )
}