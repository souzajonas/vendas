import { MenuItem } from "../menu-item/menu-item";

interface MenuProps {

}
export function Menu(props : MenuProps){
    return(
        <>
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
          <p className="menu-label is-hidden-touch">
            Minhas Vendas
          </p>
          <ul className="menu-list">
            <MenuItem href="/" label="Home"/>
            <MenuItem href="/" label="Cadastros" />
            <MenuItem href="/" label="Config" />
          </ul>
        </aside>
        </>
    )
}