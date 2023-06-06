import MainLayout from "../components/layouts/main/MainLayout"
import FinishPage from "../pages/finish/FinishPage"
import HomePage from "../pages/home/HomePage"
import QuizPage from "../pages/quiz/QuizPage"
import ProtectedRoute from "./ProtectedRoute"

interface ConfigRoute {
    path: string,
    element: React.ReactNode | JSX.Element,
    children?: ConfigRoute[]
}

const routes: ConfigRoute[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/quiz",
                element: 
                    <ProtectedRoute>
                        <QuizPage />
                    </ProtectedRoute>
                ,
            },
            {
                path: "/quiz/finish",
                element: 
                    <ProtectedRoute>
                        <FinishPage />
                    </ProtectedRoute>
                ,
            }
        ]
    }
]

export default routes