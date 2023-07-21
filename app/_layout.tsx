import { Stack } from 'expo-router';
import { Button } from 'react-native';
import { router } from 'expo-router';

export default function Layout() {



	return (
		<Stack
			// https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
			screenOptions={{
				headerStyle: {
					backgroundColor: '#0a52f0',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}>
			{/* Optionally configure static options outside the route. */}
			<Stack.Screen name="index" options={{
				headerTitle: "Home Page", headerShown: true, headerStyle: {
					backgroundColor: '#1ef4b0',
				},
			}} />

			<Stack.Screen name="test1" options={{ headerTitle: "Testing", headerRight: () => <Button title="Open modal" onPress={() => router.push("/modal")} /> }} />


			<Stack.Screen name="modal" options={{ presentation: 'modal', headerLeft: () => <Button title="Close" onPress={() => router.back()} /> }} />


			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />


		</Stack>
	);
}
