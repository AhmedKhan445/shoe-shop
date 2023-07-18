import { useState } from "react";
import s from "./code.module.scss";
import {
  MultiFactorError,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  getMultiFactorResolver,
  multiFactor,
} from "firebase/auth";
import { useSnapshot } from "valtio";
import { store } from "@/store";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { useRecaptcha } from "@/components/Hooks/useRecaptcha";
import { toast } from "react-toastify";

type Props = {
  isCodeVerify: boolean;
  setIsCodeVerify: React.Dispatch<React.SetStateAction<boolean>>;
};

const VerificationCode: React.FC<Props> = ({
  isCodeVerify,
  setIsCodeVerify,
}) => {
  //STATES
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const { verificationId, signInMultiFactorAuthError } = useSnapshot(store);

  //SIGN MULTIFACTOR AUTH ERROR HANDLE
  const recaptcha = useRecaptcha("mfa");

  //GET LOGIN USER DETAILS
  const [user] = useAuthState(auth);

  //ENABLE TWO-FACTOR AUTH
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const cred = PhoneAuthProvider.credential(
      verificationId!,
      verificationCode
    );
    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
    try {
      await multiFactor(user!).enroll(multiFactorAssertion, "Personal Phone N");
      toast.success("Enable Two-Factor Authentication", { theme: "dark" });
      setIsCodeVerify(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Invalid Verification Code", { theme: "dark" });
    }
  };

  //SIGN IN CODE VERIFICATION 2FA
  const handleSignInSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      let resolver = getMultiFactorResolver(
        auth,
        signInMultiFactorAuthError as MultiFactorError
      );
      const phoneInfoOptions = {
        multiFactorHint: resolver.hints[0],
        session: resolver.session,
      };
      const phoneAuthProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneAuthProvider.verifyPhoneNumber(
        phoneInfoOptions,
        recaptcha!
      );
      if (verificationId) {
        const cred = PhoneAuthProvider.credential(
          verificationId,
          verificationCode!
        );
        const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
        await resolver.resolveSignIn(multiFactorAssertion);
        setIsCodeVerify(false);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Invalid Verification Code", { theme: "dark" });
    }
  };
  return (
    <div data-active={isCodeVerify} className={s.main}>
      <div data-active={isCodeVerify} className={s.container}>
        <h1>Enter Your Verification Code</h1>
        <form
          data-active={isCodeVerify}
          onSubmit={user === null ? handleSignInSumbit : handleSumbit}
          className={s.form}
        >
          <label htmlFor="code">Enter 6 Digit Code</label>
          <div className={s.form_input}>
            <input
              id="code"
              placeholder="000000"
              type="text"
              pattern="\d*"
              maxLength={6}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
          <button disabled={isLoading} className={s.submit}>
            {isLoading ? "Please Wait ..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationCode;
