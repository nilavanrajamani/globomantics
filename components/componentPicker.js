import navValues from "@/helpers/navValues";
import HouseList from "./houseList";
import House from "./house";

const ComponentPicker = ({ currentNavLocation }) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <HouseList />
        case navValues.house:
            return <House  />;
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found
                </h3>
            );
    }
};

export default ComponentPicker;