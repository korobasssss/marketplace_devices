import {IWithClassName} from "../../interfaces";
import {FC, LinkHTMLAttributes} from "react";
import styles from './styles.module.scss'
import cx from "classnames";
import {Link} from "react-router-dom";

interface ILink
    extends IWithClassName,
        LinkHTMLAttributes<HTMLLinkElement> {
    href: string,
}

export const LinkTo: FC<ILink> = (
    {
        className,
        href,
        children
    }
) => {
    return (
        <Link
            to={href}
            className={cx(
                className,
                styles.Link
            )}
            target={'_blank'}
        >
            {children}
        </Link>
    )
}