import React from 'react'
import 'bootswatch/dist/minty/bootstrap.min.css'
// components 
import PostList from './PostList'
import NavBar from './NavBar'
import BuiltBy from './BuiltBy'


const App = () => {
    return (
        <div className="ui container">
            <NavBar />
            <BuiltBy />
            <PostList />
        </div>
    )
}
export default App