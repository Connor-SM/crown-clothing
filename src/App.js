import React from 'react';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

// own import to try and get cart dropdown hidden by clicking anywhere
import toggleCartHidden from './redux/cart/cart.actions';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { hidden, toggleCartHidden } = this.props;

    return (
      <div onClick={!hidden && toggleCartHidden}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
            render={() => this.props.currentUser ? 
              <Redirect to='/' />
              : 
              <SignInAndSignUp />
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  hidden: cart.hidden
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
