import { useEffect, useState,useRef } from "react";
import "./scroll.css";

export default function Scroll({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const bottomRef = useRef(null);
  const topRef = useRef(null);


  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  function handleScrollToTop() {
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });
    topRef.current.scrollIntoView({ behavior: "smooth" });

  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div ref={topRef}></div>
      <div className="top-container" >
        <h2>Scroll Indicator</h2>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
        <button onClick={handleScrollToTop} style={{alignContent:'center'}}>Scroll To Top</button>
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
}