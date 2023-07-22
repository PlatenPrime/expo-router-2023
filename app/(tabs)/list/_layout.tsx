import { Stack } from "expo-router";

const NewsLayout = () => {


	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerTitle: "News", headerShown: false }} />
			
		</Stack>
	)
}

export default NewsLayout