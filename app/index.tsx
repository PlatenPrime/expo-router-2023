import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
	return (
		<>

			<Stack.Screen options={{ title: 'Home Page' }} />


			<View>
				<Link href="/about">About</Link>

				<Link href="/user/bacon">View user</Link>


				<Link
					href={{
						pathname: "/blog/[id]",
						params: { id: 'bacon' }
					}}>
					Link to user
				</Link>


				<Link
					replace
					href="/about">
					About Replace
				</Link>



			</View>
		</>
	);
}