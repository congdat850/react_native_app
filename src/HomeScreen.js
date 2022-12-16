import { Text, FlatList, Pressable, Image } from 'react-native'
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";

export default function HomeScreen() {
    const { data, loading } = useQuery(CONTINENT_QUERY); //execute query
    console.log(data);

    const ContinentItem = ({ continent }) => {
        const { attributes } = continent; //get the name of continent
        const { name, image, describe, price } = attributes;

        return (
            <Pressable>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: image }}
                />
                <Text>{`- Name: ${name}`}</Text>
                <Text>{`- Price: ${price}`}</Text>
                <Text>{`- Describe: ${describe}`}</Text>
            </Pressable>
        );
    };

    if (loading) {
        return <Text>Fetching data...</Text> //while loading return this
    }

    return (
        <FlatList
            data={data.stores.data}
            renderItem={({ item }) => <ContinentItem continent={item} />}
            keyExtractor={(item, index) => index}
        />
    );
}
