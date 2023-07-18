import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function Page() {
	const { rest } = useLocalSearchParams();

	return <Text>Blog post: {rest}</Text>;
}