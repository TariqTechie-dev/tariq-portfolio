import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Contact from "./Contact";

test("provides accessible labels and a Gmail fallback", () => {
  render(<Contact />);

  expect(screen.getByLabelText("Your name")).toBeRequired();
  expect(screen.getByLabelText("Your email address")).toHaveAttribute("type", "email");
  expect(screen.getByRole("link", { name: "Open Gmail" })).toHaveAttribute(
    "href",
    "https://mail.google.com/mail/?view=cm&fs=1&to=tariqhussain.webdev@gmail.com"
  );
});
