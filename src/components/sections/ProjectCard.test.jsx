import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import ProjectCard from "./ProjectCard";

const project = {
  title: "Example Project",
  image: "/example.png",
  date: "2026",
  description: "A short project description.",
  tags: ["React"],
};

test("opens the selected project from a keyboard-accessible button", () => {
  const setOpenModal = vi.fn();
  render(<ProjectCard project={project} setOpenModal={setOpenModal} />);

  fireEvent.click(screen.getByRole("button", { name: "View details for Example Project" }));

  expect(setOpenModal).toHaveBeenCalledWith({ state: true, project });
});
