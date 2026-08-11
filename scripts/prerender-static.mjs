import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const port = 4187;
const bin = process.platform === "win32" ? "npx.cmd" : "node_modules/.bin/vinext";
const args = process.platform === "win32" ? ["vinext", "start", "--port", String(port)] : ["start", "--port", String(port)];
const server = spawn(bin, args, {
  cwd: process.cwd(),
  env: { ...process.env, WRANGLER_LOG_PATH: ".wrangler/wrangler.log" },
  stdio: "ignore",
  shell: process.platform === "win32",
});

try {
  let html;
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`);
      if (response.ok) {
        html = await response.text();
        break;
      }
    } catch {}
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 500));
  }
  if (!html) throw new Error("Unable to prerender the home page for Vercel.");
  await writeFile(resolve("dist/client/index.html"), html, "utf8");
} finally {
  server.kill();
}
