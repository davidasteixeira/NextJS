import Link from "next/link";

interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (evento: any) => void;
}
export default function MenuItem(props: MenuItemProps) {
  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer `}>
      {props.url ? (
        <Link href={props.url}>
          <div
            className={`
              flex flex-col justify-center items-center
              w-20 h-20 text-gray-600 ${props.className} 
          `}
          >
            {props.icone}
            <span className={`text-xs font-ligth `}>{props.texto}</span>
          </div>
        </Link>
      ) : (
        <div
          className={`
            flex flex-col justify-center items-center
            w-20 h-20 text-gray-600  ${props.className} 
        `}
        >
          {props.icone}
          <span className={`text-xs font-ligth `}>{props.texto}</span>
        </div>
      )}
    </li>
  );
}
