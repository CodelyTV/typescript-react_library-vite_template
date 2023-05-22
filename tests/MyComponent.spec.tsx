import { render, screen } from "@testing-library/react";

import { MyComponent } from "../src/MyComponent";

test("MyComponent displays correctoy", () => {
	render(<MyComponent />);

	const heading = screen.getByText(/My Component/i);

	expect(heading).toBeInTheDocument();
});
