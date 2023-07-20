import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const unmatched = () => {
	return (

		<>

			<Stack.Screen options={{ title: "Wrong!" }} />


			<View>
				<Text>Чет не туда</Text>
			</View>
		</>
	)
}

export default unmatched;