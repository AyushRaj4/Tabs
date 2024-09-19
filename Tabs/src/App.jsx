import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchTabs = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  const changeTab = (index) => {
    setCurrentItem(index);
  };

  if (isLoading)
    return (
      <section className="jobs-center">
        <Loading />
      </section>
    );
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        changeTab={changeTab}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
