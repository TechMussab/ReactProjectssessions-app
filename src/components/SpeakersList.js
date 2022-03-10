import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState } from "react";

function SpeakersList({ showSessions }) {
  const [speakersData, setSpeakersData] = useState(data);
//import { useState,use } from "react";
  function onFavoriteToggle(id) {
    
    const speakersRecPrevious = speakersData.find(
      function (rec) 
      {
        // console.log(rec)


        return rec.id === id;
      }
    );
    // console.log(speakersRecPrevious.iterator]());
    // [...speakersRecPrevious].map( key)
    // {
    //   console.log(key);
    // }

    const speakerRecUpdated = {
      
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };
    const speakersDataNew = speakersData.map(function (rec) {
      console.log('speakersRecPrevious: '+rec.first);
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakersDataNew);
  }
  // console.log(speakersData.find(1))
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;


// for (let i=0;i<10;i++){
//   setTimeout(function() {
//     speakersData['favorite']=!speakersData['favorite'];
//   }, i*1000);
// }