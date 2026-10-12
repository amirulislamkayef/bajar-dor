'use client'
import React from 'react';
import { authClient } from '@/lib/auth-client';

const SignInPage = () => {

        const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'
        })
        if (data) {
            toast.success('Sign Up Successfull')
            redirect("/")
            
        }
        if (error) {
            toast.error('Please Try Again')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;