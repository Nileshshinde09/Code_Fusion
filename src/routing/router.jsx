import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, AppLayout, AuthLayout, DekodoSuru, Kodotesuta, IPKogeki, Mitsukeyou,Complition,GyakkoSuru } from '@/pages'
import App from '@/Initializer/App.jsx'
import { PageNotFound } from '@/components'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route
                path='/'
                element={
                    <AuthLayout>
                        <Home />
                    </AuthLayout>
                } />
            <Route
                path='/DekodoSuru'
                element={
                    <AuthLayout>
                        <DekodoSuru />
                    </AuthLayout>
                } />
            <Route
                path='/Kodotesuta'
                element={
                    <AuthLayout>
                        <Kodotesuta />
                    </AuthLayout>
                } />
            <Route
                path='/IPKogeki'
                element={
                    <AuthLayout>
                        <IPKogeki />
                    </AuthLayout>
                } />
            <Route
                path='/Mitsukeyou'
                element={
                    <AuthLayout>
                        <Mitsukeyou />
                    </AuthLayout>
                } />
            <Route
                path='/Complition'
                element={
                    <AuthLayout>
                        <Complition />
                    </AuthLayout>
                } />
            <Route
                path='/GyakkoSuru'
                element={
                    <AuthLayout>
                        <GyakkoSuru />
                    </AuthLayout>
                } />
            <Route path='*' element={<PageNotFound />} />
        </Route>
    )
)

export {
    router,
    RouterProvider
}