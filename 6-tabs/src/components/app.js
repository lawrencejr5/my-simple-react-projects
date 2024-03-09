import Header from "./header";
import Nav from "./nav";
import Applications from "./applications";
import Loading from "./loading";
import { data } from "../data/data";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  }, []);
  const [value, setValue] = useState(0);
  const applicant = data[value];
  const [allUsers, setUsers] = useState(data);
  const changeUser = (id) => {
    setValue(id);
  };
  return (
    <main>
      <Header />
      <div className="container">
        <div className="content">
          {loading ? (
            <Loading />
          ) : (
            <>
              <Nav user={allUsers} changeUser={changeUser} value={value} />
              <Applications applicant={applicant} />
            </>
          )}
        </div>
      </div>
    </main>
  );
};
export default App;
