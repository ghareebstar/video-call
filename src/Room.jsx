import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const elementRef = useRef(null); // Creating a ref

  useEffect(() => {
    if (elementRef.current) {
      const myMeeting = async () => {
        const appId = 1260205419;
        const serverSecret = "2fb698cb6b586694629ce2066f3de77e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appId,
          serverSecret,
          roomId,
          "Sigma Developer"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp?.joinRoom({
          container: elementRef.current,
          sharedLinks: [
            {
              name: "Share Link",
              url:
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname +
                "?roomID=" +
                roomId,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
        });
      };
      myMeeting();
    }
  }, [roomId]); // Added roomId to the dependencies array

  return (
    <div>
      <div ref={elementRef} style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
};

export default Room;
