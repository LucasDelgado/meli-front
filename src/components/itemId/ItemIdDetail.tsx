import { Helmet } from "react-helmet";

import { Item } from "../../models/entities/Item.entities";
import { CurrencyEnum } from "../../models/enum/CurrencyEnum";
import { currencyMap } from "../../utils/helper/currencyMap";
import { Button } from "../button/Button";
import style from "./itemIdDetail.module.scss";

type Props = {
  item: Item;
};

export const ItemIdDetail = ({ item }: Props) => {
  const { condition, description, picture, sold_quantity, title, price } =
    item || {};
  const { currency, amount } = price || {};
  const currencyConvert = currencyMap(currency as keyof typeof CurrencyEnum);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <article className={style.itemIdDetail}>
        <div className={style.itemIdDetail__main}>
          <div className={style.itemIdDetail__main__img}>
            <img src={picture} alt={title} width="680" height="680" />
          </div>

          <div className={style.itemIdDetail__main__cont}>
            <p className="font-xs mb-16">
              {condition} {sold_quantity && ` - ${sold_quantity} vendidos`}
            </p>
            <h1
              className={`${style.itemIdDetail__main__cont__title} font-l mb-32`}
            >
              {" "}
              {title}{" "}
            </h1>
            <p className="font-xxl mb-32">
              {currencyConvert} {amount}{" "}
            </p>
            <Button>Comprar</Button>
          </div>
        </div>

        {description && (
          <div className={style.itemIdDetail__descrip}>
            <h4 className="font-xl mb-32">Descripción del producto</h4>
            <p className="font-s">{description}</p>
          </div>
        )}
      </article>
    </>
  );
};
