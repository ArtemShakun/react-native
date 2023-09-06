import { useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

import Loading from '../components/Loading';

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`;

export function FullPostScreen({ route }) {
    const [article, setArticle] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { itemId } = route.params;

    useEffect(() => {
        setLoading(true);
        axios
            .get(
                `https://609a4df10f5a13001721a8eb.mockapi.io/api/v1/articles/${itemId}`
            )
            .then(({ data }) => {
                setArticle(data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Response Error', 'Can not to get articles');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
            <PostImage source={{ uri: article.avatar }} />
            <PostText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                molestiae placeat sequi repudiandae, quia doloremque quas
                perspiciatis neque facere velit vero, cum ullam error aliquam
                dolores animi! Excepturi, eos ratione.
            </PostText>
        </View>
    );
}
