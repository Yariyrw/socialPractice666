import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import SignIn from '../auth/sign-in/SignIn';
import SignUp from '../auth/sign-up/SignUp';
import Main from '../main/Main';
import Info from '../main/Info';
import HomePage from '../posts/HomePage';
import history from './history';
import AllPost from '../posts/AllPost';
import AllMembersPage from '../posts/allMemberPost/AllMembersPage';
import MembersPost from '../posts/allMemberPost/MembersPost';

function IndexRouter () {
    return (
            <Router history={history}>
                <Main />
                <Switch>
                    <Route path='/sign-in'>
                        <SignIn />
                    </Route>
                    <Route path='/sign-up'>
                        <SignUp />
                    </Route>
                    <Route exact path='/'>
                        <Info />
                    </Route>
                    <Route  path='/articles'>
                        <HomePage />
                    </Route>
                    <Route  path='/all-post'>
                        <AllPost />
                    </Route>
                    <Route  path='/all-member-post'>
                        <AllMembersPage />
                    </Route>
                    <Route  path='/members-post'>
                        <MembersPost />
                    </Route>
                </Switch>
            </Router>
    )
}

export default IndexRouter;