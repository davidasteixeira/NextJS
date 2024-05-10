import MenuItem from "./MenuItem";
import { IconeAjustes, IconeCasa, IconeSino } from "../icons";
import Logo from "./Logo";

export default function MenuLateral() {
  return (
    <aside>
      <div
        className={`flex flex-col items-center justify-center
          w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-800`}
      >
        <Logo></Logo>
      </div>
      <ul>
        <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
    </aside>
  );
}
