import {IWithClassName} from "../../interfaces";
import {FC, ReactNode, useCallback, useEffect, useState} from "react";
import styles from './styles.module.scss'
import {ButtonIcon} from "../ButtonIcon";
import {HeaderText} from "../HeaderText";
import cx from "classnames";
import {WhiteWrapper} from "../WhiteWrapper";
import {ReactComponent as CloseIcon} from "../../../assets/icons/close.svg";

interface IPopup
    extends IWithClassName {
    title: string,
    handleCancelButtonClick: () => void
    isPopupOpen: boolean,
    children: ReactNode
}

export const Popup: FC<IPopup> = (
    {
        title,
        handleCancelButtonClick,
        isPopupOpen,
        children

    }
) => {
    const [isOpenCopy, setIsOpenCopy] = useState(isPopupOpen)

    const handleWillBeClosed = useCallback(() => {
        setIsOpenCopy(false)
    }, []);

    useEffect(() => {
        if (!isOpenCopy) {
            setTimeout(() => {
                handleCancelButtonClick()
            }, 100)
        }
    }, [handleWillBeClosed, isOpenCopy]);


    return (
        <div
            className={cx(
                styles.overlay,
                {
                 [styles[`overlay_opened`]]: isOpenCopy,
                 [styles[`overlay_closed`]]: !isOpenCopy
                }
            )}>
            <WhiteWrapper
                rounding={'allRound'}
                className={styles.modal_section}
            >
                <div
                    className={styles.modal}
                >
                    <div
                        className={styles.header_section}
                    >
                        <header>
                            <HeaderText
                                title={title}
                                theme={"pageTitle"}
                                className={styles.header}
                            />
                        </header>
                        <ButtonIcon
                            onClick={handleWillBeClosed}
                            className={styles.close}
                        >
                            <CloseIcon/>
                        </ButtonIcon>
                    </div>
                    {children}
                </div>
            </WhiteWrapper>
        </div>
    )
}