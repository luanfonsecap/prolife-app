export type AppStackParams = {
  Home: undefined;
  Register: undefined;
  Menu: undefined;
  Login: undefined;
  SelectForm: undefined;
  REsults: undefined;
  Results: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParams {}
  }
}
