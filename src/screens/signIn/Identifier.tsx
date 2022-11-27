import React from 'react';
import { Pressable, StatusBar, Text, View, TextInput } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SignInStackParamList } from 'navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color, standardFontSize, standardHeight, standardWidth } from 'styles';

type IdentifierScreenProp = StackNavigationProp<SignInStackParamList, 'Identifier'>;

const Background = styled(View)`
    flex: 1;
    background-color: ${color.background.disabled};
    padding-top: ${StatusBar.currentHeight}px;
`;

const Content = styled(View)`
    flex: 1;
    padding-horizontal: ${standardWidth(24)}px;
`;

const MainText = styled(Text)`
    font-size: ${standardFontSize(24)}px;
    font-color: ${color.text.secondary2};
    font-weight: bold;
`;

const SubText = styled(Text)`
    font-size: ${standardFontSize(16)}px;
    font-color: ${color.text.main};
`;

const NextButton = styled(Pressable)`
    height: ${standardHeight(44)}px;
    background-color: ${color.button.disabledPrimary};
    justify-content: center;
    align-items: center;
    border-radius: ${standardWidth(4)}px;
`;

/** ID 입력 화면 */
const Identifier = () => {
    const navigation = useNavigation<IdentifierScreenProp>();

    return (
        <SafeAreaView mode="margin" edges={['right', 'left', 'bottom']} style={{ flex: 1 }}>
            <Background>
                <Content>
                    <MainText>아이디</MainText>
                    <SubText>아이디를 입력하세요</SubText>
                    {/* TODO: 임시 아이디 입력 */}
                    <TextInput style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />
                </Content>
            </Background>
            {/* TODO: 텍스트 인풋에 아이디가 입력되어야 press 활성화, 비활성화/활성화 디자인 추가 */}
            <NextButton onPress={() => navigation.navigate('Password')}>
                <Text>다음</Text>
            </NextButton>
        </SafeAreaView>
    );
};

export default Identifier;