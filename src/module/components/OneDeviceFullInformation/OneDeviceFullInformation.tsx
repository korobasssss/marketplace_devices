import {IWithClassName} from "../../../base/interfaces";
import {FC} from "react";
import styles from './styles.module.scss'
import cx from "classnames";
import {IDataDescriptionOneView} from "../../interfaces";
import {ScrollWrapper} from "../../../base/components";

interface IOneDeviceFullInformation
    extends IWithClassName {
    id: number,
    deviceImage: string,
    description: IDataDescriptionOneView[]
}

export const OneDeviceFullInformation: FC<IOneDeviceFullInformation> = (
    {
        className,
        id,
        deviceImage,
        description
    }
) => {
    return (
        <div
            className={cx(
                className,
                styles.main
            )}
            key={id}
        >
            <div
                className={styles.data_section}
            >
                <div
                    className={styles.image_section}
                >
                    <img
                        src={deviceImage}
                        alt={'device image'}
                        className={styles.image}
                    />
                </div>

                <ScrollWrapper
                    className={styles.data}
                >
                    {description.map((oneType, index) => {
                        if (index > 0) {
                            return (
                                <div
                                    className={styles.data_row}
                                    key={index}
                                >
                                    <header
                                        className={styles.description_title}
                                    >
                                        {oneType.title}:
                                    </header>
                                    <p
                                        className={styles.description_data}>
                                        {oneType.data}
                                    </p>
                                </div>
                            )
                        }

                    })}
                </ScrollWrapper>
            </div>
            <ScrollWrapper
                className={styles.description_text}
            >
                {description[0].data}
            </ScrollWrapper>

        </div>
    )
}