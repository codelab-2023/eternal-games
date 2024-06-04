import ReactGA from "react-ga4";

export default function Page() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/recent-played", title: "Recent Played" });
  }, [])

  return (
      <div className="my-10">
        Recent Played
      </div>
  )
}
