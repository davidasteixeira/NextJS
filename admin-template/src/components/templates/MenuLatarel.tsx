import MenuItem from "./MenuItem";
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";

export default function MenuLateral() {
  return (
    <aside
      className={`flex flex-col dark:bg-gray-900 bg-gray-200 text-gray-700`}
    >
      <div
        className={`flex flex-col items-center justify-center
          w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-800`}
      >
        <Logo></Logo>
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          className={`text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:text-white`}
          icone={IconeSair}
          onClick={() => console.log("Logout")}
        />
      </ul>
    </aside>
  );
}
