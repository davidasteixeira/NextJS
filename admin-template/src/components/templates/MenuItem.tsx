interface MenuItemProps {
  url: string;
  texto: string;
  icone: any;
}
export default function MenuItem(props) {
  return <li className={``}>{props.icone}</li>;
}
