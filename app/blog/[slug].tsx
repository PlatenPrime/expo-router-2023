import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function Page() {
	const { slug } = useLocalSearchParams();

	return (

		<>
			<Stack.Screen options={{ title: 'Blog user page' }} />


			<Text>Blog post: {slug}</Text>

			<Link href="/" asChild>
				<Pressable>
					<Text>Home</Text>
				</Pressable>
			</Link>


		</>


	);
}