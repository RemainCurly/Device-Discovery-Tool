import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import HomeScreen from "../components/HomeScreen"



function ProtectedPage() {
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch {
        setRes("Please Log-in!");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <HomeScreen/>
  );
}

export default ProtectedPage;