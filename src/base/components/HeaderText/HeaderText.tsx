import {IWithClassName} from "../../interfaces";
import {FC} from "react";
import cx from "classnames";
import styles from './style.module.scss'

interface IHeaderText
    extends IWithClassName {
    title: string,
    theme: 'mainTitle' | 'pageTitle' | 'sectionTitle'
}

export const HeaderText: FC<IHeaderText> = (
    {
        className,
        title,
        theme
    }
) => {
    return (
        <header
            className={cx(
                className,
                styles[`HeaderText_${theme}`]
            )}>
            {title}
        </header>
    )
}
