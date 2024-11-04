import { add, App } from "./App";
import { expect } from "@std/expect";

await import("global-jsdom/register");
const { render, screen } = await import("@testing-library/react");

Deno.test("renders the App component", () => {
    render(<App x={2} y={3} />);
    expect(screen.getByText("My React and TypeScript App!")).toBeTruthy();
    expect(screen.getByText("2 + 3 = 5")).toBeTruthy();
});

Deno.test("add function", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
});
