"use client";
import AuthService from "@/lib/AuthService";
import { TUser } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const useAuth = () => {
  const [user, setIsAuthenticated] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useLayoutEffect(() => {
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
