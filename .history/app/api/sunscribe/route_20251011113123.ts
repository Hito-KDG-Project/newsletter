function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

try async function  POST(req: Request) {
  const { email: raw } = await req.json();
  const email = String(raw || "").trim().toLowerCase();
}