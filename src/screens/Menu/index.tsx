import React from "react";
import { useNavigation } from "@react-navigation/native";

import { BMenu, TMenu, Container, SafeContainer } from "./styles";
import { LogoFixa } from "../LogoFixa";

const Menu = () => {
    const navigation = useNavigation();

    function handleNavigateToForm() {
        navigation.navigate('SelectForm');
    }

    function handleNavigateToResults() {
        navigation.navigate('Results');
    }

    function handleNavigateToRegisterDevice() {
        navigation.navigate('CadastrarDispositivo');
    }


    return (
        <SafeContainer>
            <LogoFixa />

            <Container>
                <BMenu onPress={handleNavigateToRegisterDevice}>
                    <TMenu>Cadastrar Dispositivo</TMenu>
                </BMenu>
                <BMenu onPress={handleNavigateToForm}>
                    <TMenu>Formulário</TMenu>
                </BMenu>
                <BMenu onPress={handleNavigateToResults}>
                    <TMenu>Visualizar Resultado</TMenu>
                </BMenu>
            </Container>
        </SafeContainer>
    )
};

export { Menu };
