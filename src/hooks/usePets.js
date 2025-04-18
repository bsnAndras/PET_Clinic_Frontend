import { useEffect, useState } from "react";
import { useAuth } from "./store";
import { getPets } from "../utils/httpClient";

const usePets = () => {
    const { token } = useAuth();

    const [pets, setPets] = useState([]);
    useEffect(() => {

        getPets(token)
            .then(response => setPets(response.data.pets))
            .catch(error => console.error('Error fetching data:', error));
    }, [token]);
    
    return { pets, setPets };
}

export default usePets;