import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

async function POST(req: Request) {
  try {
    const { email: raw } = await req.json();
    const email = String(raw || "").trim().toLowerCase();

    if (!isValidEmail(email)) {
      return NextResponse.json({message: "無効なメールアドレス"}, {status: 400})
    }

    // supabaseに保存
    const {err} = await supabaseAdmin
    .from("subscribes")
    .insert([{email}])

    if (err) {
      if (err.message.includes("duplicate key")) {
        return NextResponse.json({message: "既に登録済みです"}, {status: 409})
      }
      console.error("DB error:", err)
    }
  }
}