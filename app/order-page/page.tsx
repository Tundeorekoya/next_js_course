"use client";
import { useRouter } from "next/navigation";

const product = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
  };
  return (
    <>
      <div>product</div>
      <button onClick={handleClick}>Order Now</button>
    </>
  );
};

export default product;
