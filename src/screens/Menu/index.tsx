import React from "react";
import { useNavigation } from "@react-navigation/native";

import { BMenu, TMenu, Container, SafeContainer } from "./styles";

const Menu = () => {
    const navigation = useNavigation();

    function handleNavigateToForm() {
        navigation.navigate('SelectForm');
    }

    return (
        <SafeContainer>
            <Container>
                <BMenu>
                    <TMenu>Cadastrar Dispositivo</TMenu>
                </BMenu>
                <BMenu onPress={handleNavigateToForm}>
                    <TMenu>Formulário</TMenu>
                </BMenu>
                <BMenu>
                    <TMenu>Visualizar Resultado</TMenu>
                </BMenu>
            </Container>
        </SafeContainer>
    )
};

export { Menu };
