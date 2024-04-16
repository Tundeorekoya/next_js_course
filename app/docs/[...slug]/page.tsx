import React from "react";
 
const option = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
   if (params.slug.length===2){
    return (
      <h1>
        this page is {params.slug[0]} and {params.slug[1]}
      </h1>
    );
   } 
   else if (params.slug.length===1){
    return <h1>  welcome {params.slug[1]}</h1>;
   }
  return <div>I match all Pages.</div>;
};

export default option;
