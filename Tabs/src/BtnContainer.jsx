const BtnContainer = ({ jobs, currentItem, setCurrentItem, changeTab }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            key={item.id}
            onClick={() => {
              changeTab(index);
            //   setCurrentItem(index);
            }}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
