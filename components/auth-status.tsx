import { unstable_getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await unstable_getServerSession();
  return (
    <div className="absolute flex items-center justify-center w-full top-5">
      {session && (
        <p className="text-sm text-stone-200">
          Signed in as {session.user?.email}
        </p>
      )}
    </div>
  );
}
