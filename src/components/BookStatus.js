export default function BookStatus() {
  return (
    <div className="statistics flex">
      <div className="progress-data flex">
        <div className="flex circle-container">
          <div className="circle" />
        </div>
        <div className="progress-advance ff-m flex-c">
          <p className="progress-status">75%</p>
          <p className="completed">completed</p>
        </div>
      </div>
      <div className="bar-container flex-c">
        <div className="bar" />
      </div>
      <div className="book-statistics ff-r-s">
        <p className="chapter">current chapter</p>
        <p className="book-chapter">chapter 17</p>
        <button className="progress-btn ff-r-s" type="button">update progress</button>
      </div>
    </div>
  );
}
