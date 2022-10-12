import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'

import { CommitsProjectUserPage } from './pages/CommitsProjectUserPage'
import { ProjectsUserPage } from './pages/ProjectsUserPage'
import { SearchUserPage } from './pages/SearchUserPage'


export const App = () => {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/gitHubSearch' element={<SearchUserPage />} />
                <Route path='/gitHubSearch/userinfo' element={<ProjectsUserPage />} />
                <Route path='/gitHubSearch/userinfo/commits' element={<CommitsProjectUserPage />} />
            </Routes>
        </>
    )
}

export default App;