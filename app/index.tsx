import { View, Text, Pressable, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Image, Button } from 'react-native'
import { useState } from 'react'
import { Link, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import useFetchArts from "../hooks/useFetchArtsDB";


const index = () => {

	const [searchArt, setSearchArt] = useState<string>("")
	const [findArt, setFindArt] = useState<null>(null)
	const [artPhotoUrl, SetArtPhotoUrl] = useState<string>("")

	const { artsDB, loadingArtsDB, errorArtsDB } = useFetchArts()
	console.log(artsDB)



	const onSearchPress = () => {

		const art = artsDB.find((item: any) => item.title == searchArt.trim())

		if (art) {
			console.log(art)
			setFindArt(art)
			SetArtPhotoUrl(`https://sharik.ua/images/elements_big/${art.title}_m1.jpg`);
		}



	}


	// const handlePress = () => { router.replace("home") }






	return (
		<View style={{ flex: 1, justifyContent: "start", alignItems: "center" }} >


			{/* 
			<Pressable onPress={handlePress} >
				<Text>
					To somewhere
				</Text>
			</Pressable>




			<Link href="/test1" asChild>
				<Pressable>
					<Text>
						To test1 page
					</Text>
				</Pressable>
			</Link> */}



			<View>

				{loadingArtsDB ? (<ActivityIndicator />) : (<Text>Загружено {artsDB.length} артикулов с БД</Text>)}

			</View>






			<View style={styles.container} >


				<TextInput
					style={styles.input}
					placeholder="Поиск артикула..."
					value={searchArt}
					onChangeText={(text) => { setSearchArt(text) }}


				/>




				<TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
					<Ionicons name="ios-search" size={12} color="white" />
				</TouchableOpacity>





			</View>




			{findArt && <View
				style={styles.output}>


				<Text>{findArt.name}</Text>
				<Text>Зона:  {findArt.zone}</Text>
				<Text>ID:  {findArt._id}</Text>
				<Image
					source={{ uri: artPhotoUrl }}
					style={{ width: 100, height: 100 }}
				/>
				<Button
					title={`Перейти на страницу артикула ${findArt.title}`}
					onPress={() => { router.push(`/arts/${findArt._id}`) }} />




			</View>
			}





		</View >
	)
}

export default index



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		paddingHorizontal: 10,
	},
	input: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 5,
		outline: "none"
	},
	output: {
		padding: 10,
		borderColor: "red",
		borderWidth: 3,
	},
	searchButton: {
		backgroundColor: '#007AFF', // Customize this color as you wish
		padding: 10,
		borderRadius: 8,
		marginLeft: 10,
	},
});