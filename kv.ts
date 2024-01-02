import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

const encoder = new TextEncoder();

const kv = new Command()
  .name("kv")
  .usage("<action>")
  .action(function () {
    this.showHelp();
  })

  .command("get <key:string> [default:string]", "Gets a value")
  .action(async (_, key, def) => {
    const value = localStorage.getItem(key) ?? def;
    await Deno.stdout.write(encoder.encode(value));
  })

  .command("set <key:string> <value:string>", "Sets a value")
  .action(async (_, key, value) => {
    localStorage.setItem(key, value);
    await Deno.stdout.write(encoder.encode(value));
  })

  .command("del <key:string>", "Deletes a value")
  .action((_, key) => {
    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
    } else {
      Deno.exit(1);
    }
  });

if (import.meta.main) {
  await kv.parse();
}
