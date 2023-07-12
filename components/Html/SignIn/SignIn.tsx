import { signIn } from "next-auth/react";
import s from "./signin.module.scss";
import { useState } from "react";
import Image from "next/image";
import { buttonData } from "./data";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

const SignIn = () => {
  //FIREBASE SIGN IN
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithTwitter] = useSignInWithTwitter(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  //STATES
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  //FUNCTIONS

  const handleSignIn = (
    provider: "google" | "facebook" | "twitter" | "github"
  ) => {
    switch (provider) {
      case "google":
        signInWithGoogle();
        break;

      case "facebook":
        signInWithFacebook();
        break;

      case "twitter":
        signInWithTwitter();
        break;

      case "github":
        signInWithGithub();
        break;

      default:
        break;
    }
  };

  return (
    <section className={s.main}>
      <div className={s.container}>
        <div className={s.detail}>
          <div className={s.logo}>
            <Image src="/logo.png" alt="brand-logo" fill />
          </div>

          <div className={s.head}>
            <h2>{isSignUp ? "Create an Account" : "Sign in"}</h2>
            <p>Wellcome to the King.</p>
          </div>

          <div className={s.buttonGroup}>
            {buttonData.map(({ Icon, name, provider }, i) => {
              return (
                <button key={i} onClick={() => handleSignIn(provider)}>
                  <Icon />
                  <span>
                    {isSignUp ? "Sign Up" : "Sign in"} with {name}
                  </span>
                </button>
              );
            })}
          </div>

          {isSignUp ? (
            <p>
              Already have an Account?{" "}
              <span onClick={() => setIsSignUp(false)}>Sign in</span>
            </p>
          ) : (
            <></>
          )}
        </div>

        <div className={s.background}>
          <Image src="/sign-up-side.png" alt="shoe-img" fill />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
