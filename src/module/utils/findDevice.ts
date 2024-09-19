import {data} from "../store";

export const findDevice = (id: number)  => {
    for (const section of data) {
        const oneDevice = section.devices.find(device => device.id === id);
        if (oneDevice) {
            return oneDevice;
        }
    }
    return null;
}