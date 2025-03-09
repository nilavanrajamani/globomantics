import HouseRow from "./houseRow";
import useHouses from "@/hooks/useHouses";
import LoadingIndicator from "./loadingIndicator";
import loadingStatus from "@/helpers/loadingStatus";

const HouseList = () => {
    const addHouse = () => {
        setHouses([...houses, {
            id: 3,
            address: "32 Valley way, New York",
            country: "USA",
            price: 100000,
        },]);
    };
    const { houses, setHouses, loadingState } = useHouses();
    if (loadingState != loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(x => (
                        <HouseRow house={x} key={x.id}></HouseRow>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>Add</button>
        </>
    );
};

export default HouseList;