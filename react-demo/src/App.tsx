import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import CustomerProvider from "./store/CustomerProvider";
import Dashboard from "./pages/Dashboard";
import AddCustomer from "./pages/Add";
import UpdateCustomer from "./pages/Update";
import DeleteCustomer from "./pages/Delete";
import ItemProvider from "./store/ItemProvider";

function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "", element: <Dashboard /> },
                { path: "/add", element: <AddCustomer /> },
                { path: "/update", element: <UpdateCustomer /> },
                { path: "/delete", element: <DeleteCustomer /> },
            ],
        },
    ]);

    return (
        <>
            <CustomerProvider>
                <ItemProvider>
                    <RouterProvider router={routes} />
                </ItemProvider>
            </CustomerProvider>
        </>
    );
}

export default App;
