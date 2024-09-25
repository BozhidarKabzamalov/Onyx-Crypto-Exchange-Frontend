import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <div>Hello my world!</div>,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
