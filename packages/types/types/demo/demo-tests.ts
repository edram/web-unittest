import { f } from "demo";

// $ExpectType void
f(1);

f(2); // $ExpectType void

// @ts-expect-error
f("one");
