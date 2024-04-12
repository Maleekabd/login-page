import { UserContext } from "../context/userContext";
import { useContext } from "react";
import Navbar from "./navbar";

const Dashboard = () => {
  const { form } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <section className="dashboard-main-section">Hallo, {form.email}!!</section>
    </>
  );
};

export default Dashboard;
