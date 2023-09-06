import { styled } from 'styled-components/native';
import { Card } from '../atoms/card';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const CardContainer = styled.View`
    width: 300px;
    height: 500px;

    perspective: 1000px;
`;

export function FlippableCard() {
    return (
        <CardContainer>
            <Card />
        </CardContainer>
    );
}
