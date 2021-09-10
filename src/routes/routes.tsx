import MainMenu from "../components/MainPage/MainMenu";
import Catalog from "../components/pages/Catalog";

export const routes: any[] = [
    {path: '/', component: MainMenu, exact: true},
    {path: '/', component: Catalog, exact: true}
]

