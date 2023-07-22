import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'
import useFetchArt from '@/hooks/useFetchArtDB'

const art = () => {

	const { id } = useSearchParams()

	const { artDB, loadingArtDB, errorArtDB, artPalletsDB } = useFetchArt(id)

	console.log(artDB)
	console.log(artPalletsDB)



	return (
		<View>
			<Text>ID  {id} </Text>

			{loadingArtDB ? <ActivityIndicator /> : (
				<View>
					<Text>Art  {artDB.title} </Text>
					<Text>Name  {artDB.name} </Text>
					<Text>Zone  {artDB.zone} </Text>
					{artPalletsDB.map((pallet) => <Text>{pallet.title}</Text>)}
				</View>
			)}


		</View>
	)
}

export default art