import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import {
    Alert,
    FlatList,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';

import Post from '../components/Post';
import Loading from '../components/Loading';

const Wrapper = styled.View`
    padding-top: 25px;
`;

export function HomeScreen({ navigation }) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchPosts = () => {
        setLoading(true);
        axios
            .get('https://609a4df10f5a13001721a8eb.mockapi.io/api/v1/articles')
            .then(({ data }) => {
                setArticles(data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Response Error', 'Can not to get articles');
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(() => fetchPosts(), []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Wrapper style={{ marginTop: '50px' }}>
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={fetchPosts}
                    />
                }
                data={articles}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('PostDetail', {
                                itemId: item.id,
                            })
                        }>
                        <Post
                            createdAt={item.createdAt}
                            title={item.title}
                            imageUrl={item.avatar}
                        />
                    </TouchableOpacity>
                )}
            />
        </Wrapper>
    );
}
