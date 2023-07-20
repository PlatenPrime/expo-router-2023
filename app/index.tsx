import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
			<Text>index</Text>
			<Link href="/test1" asChild>

				<Pressable>
					<Text>
						To test1 page
					</Text>
				</Pressable>
			</Link>

		</View>
	)
}

export default index