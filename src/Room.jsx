import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const elementRef = useRef(null); // Creating a ref

  
//   useEffect(() => {
    // if (elementRef.current) {
      const myMeeting = async (element) => {
        const appId = 1260205419;
        const serverSecret = "2fb698cb6b586694629ce2066f3de77e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appId,
          serverSecret,
          roomId,
          Date.now().toString(),
          "Sigma Developer"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp?.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: "Share Link",
              url:`https://video-calling-dun.vercel.app/room/${roomId}`
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
        });
        console.log(zp);
      };
    //   myMeeting();
    // }
//   }, [roomId]); // Added roomId to the dependencies array

  return (
    <div>
      <div ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
};

export default Room;
