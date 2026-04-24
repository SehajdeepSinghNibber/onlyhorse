"use client";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from "react";

const AuthButtons = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex gap-5 flex-1 md:flex-row flex-col">
      
      {/* LOGIN */}
      <LoginLink onClick={() => setLoading(true)}>
        <Button className="w-60 h-10 bg-black text-white" disabled={loading}>
          Login
        </Button>
      </LoginLink>

      {/* REGISTER */}
      <RegisterLink onClick={() => setLoading(true)}>
        <Button className="w-60 h-10 bg-sky-500" disabled={loading}>
          Sign up
        </Button>
      </RegisterLink>

    </div>
  );
};

export default AuthButtons;