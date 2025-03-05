import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const { get, loadingState } = useGetRequest("/api/houses");

    useEffect(() => {
        async function fetchData() {
            const houses = await get();
            setHouses(houses);
        }
        fetchData();
    }, [get]);

    return { houses, setHouses, loadingState };
};

export default useHouses;