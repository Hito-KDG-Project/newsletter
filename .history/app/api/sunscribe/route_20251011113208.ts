function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

async function POST(req: Request) {
  try {
  const { email: raw } = await req.json();
  const email = String(raw || "").trim().toLowerCase();
  }
}