import {IWithClassName} from "../../interfaces";
import {FC, ReactElement, ReactNode} from "react";
import cx from "classnames";
import styles from './styles.module.scss'

interface ICounter
    extends IWithClassName {
    children: ReactNode | ReactElement;
}

export const EllipseWrapper : FC<ICounter> = (
    {
        className,
        children
    }
) => {
    return (
        <div
            className={cx(
                className,
                styles.Ellipse
            )}
        >
            {children}
        </div>
    )
}