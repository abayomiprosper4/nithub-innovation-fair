import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { companyName, contactPerson, email, countryCode, phone, category, sector, description } = body;

    if (!companyName || !contactPerson || !email || !countryCode || !phone || !category || !sector) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw_M6Xuy6oCC0dre86DDAkuS91Pp0p36VY86H7Hzvq8cQtE6-MMQFlEAZ1hulag_UY/exec";

const response = await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  headers: { "Content-Type": "text/plain;charset=utf-8" }, 
  body: JSON.stringify({
    companyName,
    contactPerson,
    email,
    countryCode,
    phone,
    category,
    sector,
    description: description || "No description provided",
    timestamp: new Date().toISOString(),
  }),
  redirect: "follow",
  cache: "no-cache", 
});

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      console.error("Google sent non-JSON response:", text);
      throw new Error("Invalid response from Google");
    }

    if (result.result === "success") {
      return NextResponse.json({ success: true });
    } else {
      console.error("Google Script Error Detail:", result.error);
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Server Route Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}