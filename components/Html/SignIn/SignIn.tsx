import s from "./signin.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { buttonData } from "./data";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { toast } from "react-toastify";
import { store } from "@/store";

type Props = {
  setIsCodeVerify: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignIn: React.FC<Props> = ({ setIsCodeVerify }) => {
  //FIREBASE SIGN IN
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const [signInWithTwitter, twitterUser, twitterLoading, twitterError] =
    useSignInWithTwitter(auth);
  const [signInWithGithub, githubUser, gihtubLoading, githubError] =
    useSignInWithGithub(auth);

  //TWO-FACTOR ERROR HANDLE PROCESS TO CODE VERIFICATION
  useEffect(() => {
    if (googleError?.code === "auth/multi-factor-auth-required") {
      setIsCodeVerify(true);
      store.signInMultiFactorAuthError = googleError;
    } else if (facebookError?.code === "auth/multi-factor-auth-required") {
      setIsCodeVerify(true);
      store.signInMultiFactorAuthError = facebookError;
    } else if (twitterError?.code === "auth/multi-factor-auth-required") {
      setIsCodeVerify(true);
      store.signInMultiFactorAuthError = twitterError;
    } else if (githubError?.code === "auth/multi-factor-auth-required") {
      setIsCodeVerify(true);
      store.signInMultiFactorAuthError = githubError;
    }
  }, [googleError, twitterError, githubError, facebookError, setIsCodeVerify]);

  //GITHUB SAME EMAIL ERROR HANDLE
  useEffect(() => {
    if (githubError?.code === "auth/account-exists-with-different-credential") {
      toast.error("Your email already register try sign in with google.", {
        theme: "colored",
      });
    }
  }, [githubError]);

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
            <Image
              src="/logo.png"
              alt="brand-logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
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
          <Image
            priority
            src="/sign-up-side.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="shoe-img"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
