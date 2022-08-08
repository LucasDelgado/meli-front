import style from "./breadcumb.module.scss";

type Props = {
  categories: Array<string>;
};

export const Breadcumb = ({ categories }: Props) => {
  return (
    <ul className={`${style.breadcumb} mb-16`}>
      {categories?.map((cat, key) => (
        <li key={key}> {cat} </li>
      ))}
    </ul>
  );
};
