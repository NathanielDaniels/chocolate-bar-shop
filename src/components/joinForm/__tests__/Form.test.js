import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import Form from "../../joinForm";
import "@testing-library/jest-dom/extend-expect";

describe("Form", () => {
  it("renders children", () => {
    render(
      <Form>
        <p>Child element</p>
      </Form>
    );

    expect(screen.getByText("Child element")).toBeInTheDocument();
  });

  it("passes rest props to Container component", () => {
    render(
      <Form data-testid="form" className="test-class">
        <p>Child element</p>
      </Form>
    );

    expect(screen.getByTestId("form")).toHaveClass("test-class");
  });
});

describe("UserProfileContainer", () => {
  it("renders children", () => {
    render(
      <Form.UserProfile>
        <p>Child element</p>
      </Form.UserProfile>
    );
    expect(screen.getByText("Child element")).toBeInTheDocument();
  });

  it("passes rest props to UserProfile component", () => {
    render(
      <Form.UserProfile data-testid="user-profile" className="test-class">
        <p>Child element</p>
      </Form.UserProfile>
    );

    expect(screen.getByTestId("user-profile")).toHaveClass("test-class");
    // expect(container.firstChild).toHaveAttribute("data-testid", "user-profile");
  });
});
