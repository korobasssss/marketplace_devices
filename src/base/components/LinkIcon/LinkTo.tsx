import {IWithClassName} from "../../interfaces";
import {FC, LinkHTMLAttributes} from "react";
import styles from './styles.module.scss'
import cx from "classnames";
import {Link} from "react-router-dom";

interface ILink
    extends IWithClassName,
        LinkHTMLAttributes<HTMLLinkElement> {
    href: string,
    isNewPage: boolean
}

export const LinkTo: FC<ILink> = (
    {
        className,
        children,
        href,
        isNewPage
    }
) => {
    return (
        <Link
            to={href}
            className={cx(
                className,
                styles.LinkIcon
            )}
            target={isNewPage ? '_blank' : undefined}
        >
            {children}
        </Link>
    )
}