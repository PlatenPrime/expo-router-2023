import { Tabs } from 'expo-router/tabs';
export default function AppLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				// Name of the dynamic route.
				name="home"
				options={{
					// Ensure the tab always links to the same href.
					href: '/home',
					tabBarLabel: "H",
					headerTitle: "Home Screen"
				}}
			/>

			<Tabs.Screen
				// Name of the dynamic route.
				name="profile"
				options={{
					// Ensure the tab always links to the same href.
					href: '/profile',
					tabBarLabel: "P",
					headerTitle: "Profile Screen"
				}}
			/>





		</Tabs>
	);
}
