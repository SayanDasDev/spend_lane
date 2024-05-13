"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

function WelcomeCard() {
  const { user, isLoaded } = useUser();

  return (
    <div className="bg-primary rounded-2xl p-6 space-y-1">
      <p className="text-3xl font-bold text-background">
        Welcome Back, {user?.firstName} 👋
      </p>
      <p className="text-lg font-medium text-background/75">
        This is your Spending Overview Report
      </p>
    </div>
  );
}

export default WelcomeCard;
