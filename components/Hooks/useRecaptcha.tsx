import { auth } from "@/firebase/clientApp";
import { ApplicationVerifier, RecaptchaVerifier } from "firebase/auth";
import { useEffect, useState } from "react";

export const useRecaptcha = (componentId: string) => {
  const [recaptcha, setRecaptcha] = useState<ApplicationVerifier>();

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, componentId, {
      size: "invisible",
    });
    setRecaptcha(recaptchaVerifier);

    return () => recaptchaVerifier.clear();
  }, [componentId]);

  return recaptcha;
};
