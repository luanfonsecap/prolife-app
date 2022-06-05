export type AppStackParams = {
  Home: undefined;
  Register: undefined;
  Menu: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParams {}
  }
}
