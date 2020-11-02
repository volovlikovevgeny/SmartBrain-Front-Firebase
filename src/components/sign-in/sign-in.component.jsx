import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import { signInWithGoogle, auth, createProfileDocument, } from '../../firebase.utils';


class Signin extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
            email: '',
            password: ''
        }
    }

    unsubscribeFromAuth = null


    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createProfileDocument(userAuth);

                userRef.onSnapshot(Snapshot => {
                    this.setState({
                        currentUser: {
                            id: Snapshot.id,
                            ...Snapshot.data()
                        }
                    })
                })
                console.log(this.state);
            }

            this.setState({ currentUser: userAuth })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();

        console.log('componentwill unmount ');
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.log(err);
        }
    };


    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        console.log(this.state);
        const { email, password, } = this.state;
        return (
            <form className='signin' style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} onSubmit={this.handleSubmit} >
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        name='email'
                                        type='email'
                                        onChange={this.handleChange}
                                        value={email}
                                        label='email'
                                        required
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        name='password'
                                        type='password'
                                        value={password}
                                        onChange={this.handleChange}
                                        label='password'
                                        required
                                    />
                                </div>
                            </fieldset>

                            <div className="signin-btn" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <button
                                    style={{ width: '45%' }}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type='submit'
                                >Sign In</button>
                                <button
                                    onClick={signInWithGoogle}
                                    style={{ width: '45%' }}
                                    to='/home'
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Sign in"
                                >
                                    <FcGoogle fontSize='15px' />
                                </button>

                                {
                                    this.state.currentUser === null ? null : <Redirect to='/home' />
                                }

                            </div>
                            <div className="lh-copy mt3">
                                <Link to='/register' className="f6 link dim black db pointer">Register</Link>
                            </div>
                        </div>
                    </main>
                </article>
            </form>
        );
    }
}

export default Signin;