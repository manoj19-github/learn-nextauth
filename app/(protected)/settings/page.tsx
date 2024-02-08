import { auth } from "@/auth";
import { json } from "node:stream/consumers";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default SettingsPage;
