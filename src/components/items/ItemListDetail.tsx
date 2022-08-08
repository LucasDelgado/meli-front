import { Link } from "react-router-dom";
import { ItemOfSearch } from "../../models/entities/Items.entities";
import { CurrencyEnum } from "../../models/enum/CurrencyEnum";
import { currencyMap } from "../../utils/helper/currencyMap";
import styles from "./itemListDetail.module.scss";

type Props = {
  item: ItemOfSearch;
};

export const ItemListDetail = ({ item }: Props) => {
  const { id, title, price, picture, free_shipping, address } = item || {};
  const { currency, amount } = price || {};
  const currencyConvert = currencyMap(currency as keyof typeof CurrencyEnum);
  return (
    <Link to={`/items/${id}`}>
      <article className={styles.itemListDetail}>
        <div className={styles.itemListDetail__main}>
          <div className={styles.itemListDetail__main__img}>
            <img src={picture} alt={title} />
          </div>
          <div className={styles.itemListDetail__main__descrip}>
            <p
              className={`${styles.itemListDetail__main__descrip__price} font-l`}
            >
              {currencyConvert} {amount} {free_shipping && <span></span>}{" "}
            </p>
            <h2 className="font-m">{title}</h2>
          </div>
        </div>
        <address className={styles.itemListDetail__address}>
          <p className="font-xxs">{address}</p>
        </address>
      </article>
    </Link>
  );
};
