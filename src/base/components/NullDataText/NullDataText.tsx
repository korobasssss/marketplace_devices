import {FC} from "react";
import {IWithClassName} from "../../interfaces";
import cx from "classnames";
import styles from './styles.module.scss'

interface INullDataText
    extends IWithClassName {
    text: string
}

export const NullDataText: FC<INullDataText> = (
    {
        className,
        text
    }
) => {
    return (
        <p
            className={cx(
                className,
                styles.Text
            )}
        >
            {text}
        </p>
    )
}