import { comments } from "../data";
import { type NextRequest } from "next/server";
import {  redirect } from "next/navigation";


// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   const filterComments = query
//     ? comments.filter((comment) => comment.text.includes(query))
//     : comments;

//   return Response.json(filterComments);
// }

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length){
    redirect("/comment")
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;

  return Response.json(comments[index]);
}

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const index = comments.findIndex(
//     (comment) => comment.id === parseInt(params.id)
//   );
//   const deleteComment = comments[index];
//   comments.splice(index, 1);

//   return Response.json(deleteComment);
// }



