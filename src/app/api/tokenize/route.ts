import { getEncoding } from "js-tiktoken";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  if (!text) {
    return NextResponse.json(
      { error: "Missing 'text' query parameter" },
      { status: 400 }
    );
  }

  try {
    const encoding = getEncoding("cl100k_base");
    const tokens = encoding.encode(text);

    return NextResponse.json({ tokens });
  } catch (error) {
    console.error("Error tokenizing text:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
