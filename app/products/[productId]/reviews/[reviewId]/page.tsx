import React from "react";

const page = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      Review{params.productId} for Product{params.reviewId}
    </div>
  );
};

export default page;
