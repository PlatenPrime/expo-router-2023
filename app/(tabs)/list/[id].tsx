import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useSearchParams } from 'expo-router'

const NewsDetails = () => {

	const { slug } = useLocalSearchParams()
	const { id } = useSearchParams()



	return (
		<View>

			<Stack.Screen options={{ headerTitle: `News number  ${id}` }} />

			<Text>{slug}</Text>
			<Text>{id}</Text>
		</View>
	)
}

export default NewsDetails