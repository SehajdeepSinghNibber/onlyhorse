"use client";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from "react";

const AuthButtons = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex gap-3 flex-1 md:flex-row flex-col">
      
      {/* LOGIN */}
      <LoginLink className="flex-1" onClick={() => setLoading(true)}>
        <Button className="w-60 bg-black text-white" disabled={loading}>
          Login
        </Button>
      </LoginLink>

      {/* REGISTER */}
      <RegisterLink className="flex-1" onClick={() => setLoading(true)}>
        <Button className="w-60 bg-sky-500" disabled={loading}>
          Sign up
        </Button>
      </RegisterLink>

    </div>
  );
};

export default AuthButtons;