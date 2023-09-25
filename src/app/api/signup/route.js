import { auth } from "@/firebase/config";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { email, password } = await req.json();
  console.log(email, password);
  return NextResponse.json({ email, password });

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       return user;
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       return errorMessage;
  //     });
};
