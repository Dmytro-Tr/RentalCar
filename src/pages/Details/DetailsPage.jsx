import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const catalogId = useParams();

  return <div>Now showing Details Page with id -{catalogId} </div>;
};

export default DetailsPage;
