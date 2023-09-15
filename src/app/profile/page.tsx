"use client";

import { Layout } from "../../components/index";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Profile() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
      toast.success("Logout successful");
      router.push("/signin");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <Layout>
      <button
        onClick={logout}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </Layout>
  );
}

export default Profile;
