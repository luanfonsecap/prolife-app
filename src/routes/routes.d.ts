import { ITest } from "../screens/SelectForm";

export type AppStackParams = {
  Home: undefined;
  Register: undefined;
  Menu: undefined;
  Login: undefined;
  SelectForm: undefined;
  REsults: undefined;
  Results: undefined;
  CadastrarDispositivo: undefined;
  Form: { 
    test: ITest,  
    id_device: number,
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParams {}
  }
}
