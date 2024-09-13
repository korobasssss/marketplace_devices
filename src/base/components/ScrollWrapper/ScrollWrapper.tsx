import {IWithClassName} from "../../interfaces";
import {FC, ReactElement, ReactNode} from "react";
import styles from './styles.module.scss'
import cx from "classnames";

interface IScrollWrapper
    extends IWithClassName {
    children: ReactNode | ReactElement;
}

export const ScrollWrapper: FC<IScrollWrapper> = (
    {
        className,
        children
    }
) => {

    return (
        <div
            className={cx(
                className,
                styles.scroll_wrapper
            )}
        >
            {children}
        </div>
    )
}