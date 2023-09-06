import { StatusBar } from 'expo-status-bar';
import { BackHandler, StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const PostContainer = styled.View`
    flex-direction: row;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
`;
const PostImage = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 12px;
    margin-right: 12px;
`;

const PostDetails = styled.View`
    flex: 1;
    justify-content: center;
`;

const PostDate = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 2px;
`;

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
`;

export default function Post({ title, imageUrl, createdAt }) {
    return (
        <View>
            <PostContainer>
                <PostImage source={{ uri: imageUrl }} />
                <PostDetails>
                    <PostTitle>{title}</PostTitle>
                    <PostDate>{createdAt}</PostDate>
                </PostDetails>
            </PostContainer>
            <StatusBar theme="auto" />
        </View>
    );
}
