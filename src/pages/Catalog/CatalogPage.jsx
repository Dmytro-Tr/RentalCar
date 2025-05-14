import CardsCars from "../../components/CardsCars/CardsCars";
import Filter from "../../components/Filter/Filter";
import s from "./catalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.wrapper}>
      <Filter />
      <CardsCars />
    </div>
  );
};

export default CatalogPage;
