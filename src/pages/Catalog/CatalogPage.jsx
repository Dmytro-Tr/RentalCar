import CardsCars from "../../components/CardsCars/CardsCars";
import s from "./catalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.wrapper}>
      <CardsCars />
    </div>
  );
};

export default CatalogPage;
