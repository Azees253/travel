import TripData from "./TripData";
import manali from "/src/assets/manali.jpg";
import Singapore from "/src/assets/singapore.jpg";
import Swizerland from "/src/assets/swizerland.jpg";
import Aus from "/src/assets/australia.jpg";
import UAE from "/src/assets/dubai.jpg";
import maladives from "/src/assets/maldives.jpg";

function Trip() {
  return (
    <div className="trip">
      <div className="tripheader">
        <h1> Lates Trips</h1>
        <p>There trips is very joy full enjoyment our journey.</p>
      </div>

      <div className="tripcard">
        <TripData
          image="https://plus.unsplash.com/premium_photo-1668883188917-761f35942220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb25lc2lhfGVufDB8fDB8fHww"
          heading="indonesia"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />

        <TripData
          image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsYXlzaWF8ZW58MHx8MHx8fDA%3D"
          heading="Malaysiya"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />
        <TripData
          image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8fDB8fHww"
          heading=" France"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />
      </div>
      <div className="tripcard">
        <TripData
          image={manali}
          heading="Manali"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />

        <TripData
          image={Swizerland}
          heading=" Swizerland"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />
        <TripData
          image={Singapore}
          heading=" Singapore"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />
      </div>
      <div className="tripcard">
        <TripData
          image={UAE}
          heading="Dubai"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />

        <TripData
          image={Aus}
          heading="Australia"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />
        <TripData
          image={maladives}
          heading="maldives"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The countrys capital, Jakarta, is the world s second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India."
        />
      </div>
    </div>
  );
}
export default Trip;
