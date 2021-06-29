import { useRouter } from "next/router";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
        return null;
      }
      return <WrappedComponent />;
    }
    return null;
  };
};

export default WithAuth;
