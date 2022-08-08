import style from "./button.module.scss";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, ...r }: Props) => {
  return (
    <button {...r} className={`${style.button} font-xs`}>
      {" "}
      {children}{" "}
    </button>
  );
};
