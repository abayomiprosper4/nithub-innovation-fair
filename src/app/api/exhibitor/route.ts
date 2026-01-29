import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { companyName, contactPerson, email, category, description } = body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔴 IMPORTANT: Replace this with the Web App URL for your EXHIBITOR Google Sheet script
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxjf5zPPvYTEiT63TTJZKsNt8EVaPnlHsF2KTgVVmzHu5FTt4O3JFFTsAdiAcWZjAlW7Q/exec";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        companyName,
        contactPerson,
        email,
        category,
        description: description || "No description provided",
        timestamp: new Date().toISOString(),
      }),
      redirect: "follow",
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