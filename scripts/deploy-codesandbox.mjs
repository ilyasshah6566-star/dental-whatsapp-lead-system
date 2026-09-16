// Deploys index.html (the demo) to CodeSandbox's public "define" API (no account needed).
// Prints the sandbox id and the public static URL (csb.app).
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

const res = await fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ files: { "index.html": { content: html } } }),
});

const text = await res.text();
console.log("HTTP", res.status);
try {
  const data = JSON.parse(text);
  if (data.sandbox_id) {
    const id = data.sandbox_id;
    console.log("SANDBOX_ID=" + id);
    console.log("EDITOR_URL=https://codesandbox.io/s/" + id);
    console.log("STATIC_URL=https://" + id + ".csb.app/");
  } else {
    console.log(text.slice(0, 500));
  }
} catch {
  console.log(text.slice(0, 500));
}
