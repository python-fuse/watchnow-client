"use client";
import AuthService from "@/lib/AuthService";
import { User } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setIsAuthenticated] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        const user = await AuthService.checkAuth();
        setIsAuthenticated(user.user);
      } catch (error) {
        setIsAuthenticated(null);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  return { user, loading };
};
export default useAuth;
