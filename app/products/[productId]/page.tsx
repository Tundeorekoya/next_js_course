import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const MetaData = ({ params }: Props): Metadata => {
  return {
    title: `product${params.productId}`
  };
};
export default function page({params}:Props) {
  return (
    <div>
      AMOUNT OF {params.productId}
    </div>
  )
}


