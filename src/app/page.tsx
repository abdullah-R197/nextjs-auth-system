"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Lock, UserPlus } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to Auth App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A secure and modern authentication system built with Next.js, TypeScript, and Prisma
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-blue-600" />
                Get Started
              </CardTitle>
              <CardDescription>
                Choose an option to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/register" className="block">
                <Button className="w-full" size="lg">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Create Account
                </Button>
              </Link>
              
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-1">Secure</h3>
                <p className="text-sm text-gray-600">Industry-standard encryption</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-1">Protected</h3>
                <p className="text-sm text-gray-600">Your data is safe with us</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <UserPlus className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-1">Simple</h3>
                <p className="text-sm text-gray-600">Easy to use interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}