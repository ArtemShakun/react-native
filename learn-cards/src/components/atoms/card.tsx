import { Text } from 'react-native';
import { styled } from 'styled-components/native';
import { useState } from 'react';

export function Card() {
    const [showFront, setShowFront] = useState(true);
    console.log(showFront);

    return (
        <CardContainer onPress={() => setShowFront(!showFront)}>
            {showFront ? (
                <BackCardSide>DOG</BackCardSide>
            ) : (
                <FrontCardSide>ПЕС</FrontCardSide>
            )}
        </CardContainer>
    );
}

const CardContainer = styled.TouchableOpacity`
    height: 100%;
    width: 100%;

    transform-style: preserve-3d;

    position: relative;

    border-radius: 5px;
    border-width: 5px;
    border-style: solid;
    border-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);

    transition: transform 1000ms;
`;

const FrontCardSide = styled.Text`
    height: 100%;
    width: 100%;

    backface-visibility: hidden;

    position: absolute;

    text-align: center;
    text-align-vertical: center;

    font-weight: 800;
    font-size: 60px;
    color: white;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);

    background-color: #73d0ff;
`;

const BackCardSide = styled.Text`
    height: 100%;
    width: 100%;

    backface-visibility: hidden;

    position: absolute;

    text-align: center;
    text-align-vertical: center;

    font-weight: 800;
    font-size: 60px;
    color: white;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);

    background-color: #ffad66;
`;
