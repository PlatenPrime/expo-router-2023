import { Pressable, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function Page() {
	return (

		<>

			<Stack.Screen options={{ title: 'About Page' }} />


			<Link href="/" asChild>
				<Pressable>
					<Text>Home</Text>
				</Pressable>
			</Link>
		</>
	);
}