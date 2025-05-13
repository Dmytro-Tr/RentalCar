import s from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Sorry</h3>
      <p className={s.text}>page not found</p>
    </div>
  );
};

export default NotFound;
