import Speaker from "./Speaker";
import {data} from "../../SpeakerData";
import {useState, useEffect} from "react";
import {render} from "react-dom";
import React from "react";
import ReactPlaceholder from "react-placeholder";

function SpeakersList({showSessions}) {
    const [speakersData, setSpeakersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState('');
    const delay = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    //   const delay=(ms)=> new Promise(resolve => setTimeout(resolve,ms));


    useEffect(() => {

            async function addDelay() {
                try {
                    await delay(2000);
                    // throw "nigger error"
                    setIsLoading(false);
                    setSpeakersData(data);
                    console.log('done delay');
                } catch (e) {
                    setIsLoading(false);
                    setHasErrored(true);
                    setError(e);
                }
            }

            addDelay();
        }, []
    );


//import { useState,use } from "react";
    function onFavoriteToggle(id) {

        const speakersRecPrevious = speakersData.find(
            function (rec) {
                return rec.id === id;
            }
        );

        const speakerRecUpdated = {

            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite,
        };
        const speakersDataNew = speakersData.map(function (rec) {
            console.log('speakersRecPrevious: ' + rec.first);
            return rec.id === id ? speakerRecUpdated : rec;
        });

        setSpeakersData(speakersDataNew);
    }

    if (hasErrored === true) {
        return <React.Fragment>
            ERROR: {error}
        </React.Fragment>

    }
    // if (isLoading === true) {
    //     return <div>
    //         Loading...
    //     </div>
    // }
    return (
        <div className="container speakers-list">

            <ReactPlaceholder
            type="media"
            row={150}
            className="speakers-list-placeholder"
            ready={isLoading===false}
            >
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
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakersList;
