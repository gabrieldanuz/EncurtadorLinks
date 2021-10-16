import React, {useState} from 'react';
import {ContainerLogo, Logo, ContainerContent, 
    Title, SubTitle,
ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText} from './styles';
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal} from 'react-native';

import ModalLink from '../../components/ModalLink';

import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import {Feather} from '@expo/vector-icons';

export default function Home(){

    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function handleShortLink(){
        //alert('URL ENCURTADA' + input);

        setModalVisible(true);

    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <LinearGradient
        colors={['#1ddbb9','#132742']}
        style={{flex: 1, justifyContent: 'center'}}
        >

            <StatusBarPage 
            barStyle="light-content"
            backgroundColor="#1ddbb9"
            />

            <Menu />

            <KeyboardAvoidingView 
            behavior={ Platform.OS === 'android' ? 'padding' : 'position'}
            enabled
            >

            <ContainerLogo>
                <Logo
                source={require('../../assets/Logo.png')} resizeMode="contain" />
            </ContainerLogo>

            <ContainerContent>
                <Title>GabrielLink</Title>
                <SubTitle>Cole seu link para encurtar</SubTitle>
            
            <ContainerInput>
                <BoxIcon>
                    <Feather name="link" size={22} color="#FFF" />
                </BoxIcon>
                <Input 
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                placeholder="Cole seu link aqui"
                placeholderTextColor="white"
                value={input}
                onChangeText={(text) => setInput(text)}
                />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
                <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>

            </ContainerContent>

            </KeyboardAvoidingView>

            <Modal  visible={modalVisible} transparent animationType="slide">
                <ModalLink onClose={() => setModalVisible(false)}/>
            </Modal>

        </LinearGradient>
        </TouchableWithoutFeedback>
    )
}