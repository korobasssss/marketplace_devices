import {DeviceSectionComponent} from "../";

export const MainComponent = () => {
    return (
        <ul>
            <DeviceSectionComponent
                title={'Наушники'}
            />
            <DeviceSectionComponent
                title={'Беспроводные наушники'}
            />
        </ul>
    )
}