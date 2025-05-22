import { assertEquals, assertThrows } from "@std/assert";

import { gradient } from "./mod.ts";

Deno.test("A basic gradient", () => {
  const basic = gradient(["#ff5f6d", "#ffc371"]);
  const result = basic("Hello World!");
  assertEquals(
    result,
    "\x1b[38;2;255;95;109mH\x1b[38;2;255;103;109me\x1b[38;2;255;112;110ml\x1b[38;2;255;120;110ml\x1b[38;2;255;128;110mo\x1b[38;2;255;137;111m \x1b[38;2;255;145;111mW\x1b[38;2;255;153;111mo\x1b[38;2;255;162;112mr\x1b[38;2;255;170;112ml\x1b[38;2;255;178;112md\x1b[38;2;255;187;113m!\x1b[0m"
  );
});

Deno.test("A gradient with no elements", () => {
  assertThrows(
    () => gradient([]),
    Error,
    "At least 2 colors are required to create a gradient"
  );
});

Deno.test("A gradient with only 1 element", () => {
  assertThrows(
    () => gradient(["#ff5f6d"]),
    Error,
    "At least 2 colors are required to create a gradient"
  );
});

Deno.test("A gradient with short hexcodes", () => {
  const basic = gradient(["#ff5", "#ffc"]);
  const result = basic("Hello World!");
  assertEquals(
    result,
    "\x1b[38;2;255;255;85mH\x1b[38;2;255;255;95me\x1b[38;2;255;255;105ml\x1b[38;2;255;255;115ml\x1b[38;2;255;255;125mo\x1b[38;2;255;255;135m \x1b[38;2;255;255;145mW\x1b[38;2;255;255;154mo\x1b[38;2;255;255;164mr\x1b[38;2;255;255;174ml\x1b[38;2;255;255;184md\x1b[38;2;255;255;194m!\x1b[0m"
  );
});

Deno.test("A gradient with an empty string", () => {
  const basic = gradient(["#ff5f6d", "#ffc371"]);
  const result = basic("");
  console.log({ result });
  assertEquals(result, "\x1b[38;2;255;95;109m\x1b[0m");
});
