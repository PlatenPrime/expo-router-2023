import { useState, useEffect } from 'react';
import axios from 'axios';


const url = "https://btw-server.up.railway.app/api"


const useFetchArtDB = (id) => {
	const [artDB, setArtDB] = useState([]);
	const [loadingArtDB, setLoadingArtDB] = useState(true);
	const [errorArtDB, setErrorArtDB] = useState(null);
	const [artPalletsDB, setArtPalletsDB] = useState([])

	useEffect(() => {


		const fetchData = async () => {
			try {
				const responseArt = await axios.get(`${url}/arts/${id}`);
				setArtDB(responseArt.data);
				const responsePallets = await axios.get(`${url}/pallets/art/${id}`);
				setArtPalletsDB(responsePallets.data);

			} catch (error) {
				setErrorArtDB(error);
			} finally {
				setLoadingArtDB(false);
			}
		};


		fetchData();

	}, [id]);
















	return { artDB, loadingArtDB, errorArtDB, artPalletsDB };
};

export default useFetchArtDB;