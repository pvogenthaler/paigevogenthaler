import styles from "./index.module.scss";

const StravaSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40">
    <title>Strava</title>
    <path
      fill={`#FC5200`}
      d="M19.161621 40.397949c-3.805664 0-7.35791-0.529785-10.649902-1.575684C5.219238 37.769043 2.383301 36.194824 0 34.101074l6.67041-7.949707c2.027344 1.563477 4.166016 2.685059 6.403809 3.359375 2.241699 0.676758 4.467773 1.015137 6.673828 1.015137 1.141113 0 1.956055-0.143555 2.456055-0.424805 0.501953-0.286621 0.746094-0.678711 0.746094-1.174316v-0.106445c0-0.538086-0.368652-0.98877-1.094238-1.337402 -0.725586-0.356445-2.092773-0.728027-4.084961-1.118164 -2.098145-0.429688-4.101562-0.930664-6.002441-1.498535 -1.904785-0.564453-3.575684-1.297363-5.016113-2.187988 -1.442871-0.886719-2.589355-2.011719-3.445312-3.362305 -0.854004-1.354004-1.28125-3.009766-1.28125-4.964844v-0.106934c0-1.780762 0.346191-3.437012 1.042969-4.965332C3.756836 7.749512 4.772949 6.412109 6.10791 5.276855c1.335449-1.139648 2.993164-2.027344 4.969727-2.671875 1.967773-0.639648 4.238281-0.959473 6.804199-0.959473 3.625 0 6.800781 0.428711 9.523926 1.284668 2.723145 0.848145 5.166992 2.130859 7.34082 3.837891l-6.083496 8.435059c-1.779785-1.28418-3.658203-2.217285-5.631836-2.806152 -1.97998-0.588379-3.831543-0.882812-5.57959-0.882812 -0.922852 0-1.607422 0.142578-2.051758 0.427734 -0.452637 0.284668-0.667969 0.660156-0.667969 1.121094v0.105469c0 0.501953 0.334473 0.929199 1.013184 1.286133 0.679199 0.354004 1.994141 0.729004 3.948242 1.120117 2.385254 0.424805 4.554199 0.941895 6.516602 1.543457 1.953125 0.61084 3.639648 1.381348 5.041504 2.32666 1.405273 0.942383 2.494141 2.067383 3.256836 3.388184 0.763672 1.316895 1.147461 2.92041 1.147461 4.802734v0.109863c0 1.954102-0.390137 3.719727-1.17627 5.282715 -0.780762 1.567383-1.88623 2.890137-3.309082 3.978516 -1.424316 1.08252-3.151855 1.917969-5.179199 2.506348C23.966309 40.103027 21.68457 40.397949 19.161621 40.397949L19.161621 40.397949z"
    />
    <polygon
      fill={`#FC5200`}
      points="45.95459,12.902832 34.958984,12.902832 34.958984,2.342285 69.446777,2.342285 69.446777,12.902832 58.447754,12.902832 58.447754,39.69873 45.95459,39.69873 45.95459,12.902832 "
    />
    <path
      fill={`#FC5200`}
      d="M89.086914 20.115234c1.495605 0 2.671875-0.321289 3.521484-0.960449 0.854004-0.641602 1.283203-1.534668 1.283203-2.672852v-0.10791c0-1.207031-0.429199-2.108398-1.283203-2.689941 -0.849609-0.588379-2.011719-0.879883-3.466309-0.879883h-5.447754v7.311035H89.086914L89.086914 20.115234zM71.203125 2.342285h18.258301c3.344238 0 6.092773 0.383789 8.244141 1.148438 2.15625 0.763672 3.886719 1.806641 5.20459 3.123535 1.141602 1.135254 1.994629 2.418945 2.566406 3.837402 0.566406 1.423828 0.853516 3.102051 0.853516 5.01416v0.11377c0 2.737305-0.658691 5.050781-1.979492 6.93457 -1.312988 1.885254-3.109375 3.384766-5.390625 4.48291l8.698242 12.70166H93.40918l-7.047363-10.67334h-0.101562 -2.565918v10.67334H71.203125V2.342285L71.203125 2.342285z"
    />
    <polygon
      fill={`#FC5200`}
      points="179.889648,23.627441 188.032227,39.69873 200,39.69873 179.889648,0 159.781738,39.69873 171.753418,39.69873 179.889648,23.627441 "
    />
    <polygon
      fill={`#FC5200`}
      points="123.918457,23.627441 132.058105,39.69873 144.028809,39.69873 123.918457,0 103.818848,39.69873 115.78418,39.69873 123.918457,23.627441 "
    />
    <polygon
      fill={`#FC5200`}
      points="151.912598,18.412598 143.76709,2.342285 131.796387,2.342285 151.912598,42.041016 172.01416,2.342285 160.051758,2.342285 151.912598,18.412598 "
    />
  </svg>
);

const Strava = ({ stravaData }) => (
  <div className={styles["strava-embed"]}>
    <div>
      <a href="https://www.strava.com/athletes/55412609">
        <StravaSvg />
      </a>
    </div>
    <ul>
      {stravaData.map(({ map, name, distance, start_date_local, id }) => (
        <li key={id}>
          <img src={map?.url} alt={`map for activity id:${id}`} />
          <div>
            <div>{name}</div>
            <small>
              <div>{`${new Date(start_date_local).toDateString()}`}</div>
              <div>{`${Math.round((distance / 1609) * 100) / 100} mi`}</div>
            </small>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Strava;
