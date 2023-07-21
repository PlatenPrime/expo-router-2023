import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const index = () => {


	const handlePress = () => { router.replace("home")}


	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >

			<Text>index</Text>

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
			</Link>



		</View>
	)
}

export default index