import { assertEquals } from "@std/assert";

import { gradient } from "./mod.ts";

Deno.test("A basic gradient", () => {
  const basic = gradient(["#ff5f6d", "#ffc371"]);
  const result = basic("Hello World!");
  assertEquals(
    result,
    "\x1b[38;2;255;95;109mH\x1b[38;2;255;103;109me\x1b[38;2;255;112;110ml\x1b[38;2;255;120;110ml\x1b[38;2;255;128;110mo\x1b[38;2;255;137;111m \x1b[38;2;255;145;111mW\x1b[38;2;255;153;111mo\x1b[38;2;255;162;112mr\x1b[38;2;255;170;112ml\x1b[38;2;255;178;112md\x1b[38;2;255;187;113m!\x1b[0m"
  );
});
