import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { AirmeetRTCClient } from '../airmeet-rtc-sdk';
import { TEST_VIDEO_HEIGHT, TEST_VIDEO_WIDTH } from '../utils/constants';

const TestVideo = () => {
  const [loading, setLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [enableAudio, setEnableAudio] = useState(false);

  const videoEl = useRef(null);

  const testLocalStream = async () => {
    setLoading(true);
    AirmeetRTCClient.releaseTestStream();
    const mediaConstraint = {
      videoProfile: {
        isEnabled: showVideo,
        width: TEST_VIDEO_WIDTH,
        height: TEST_VIDEO_HEIGHT,
      },
      audioProfile: {
        isEnabled: enableAudio
      }
    };

    try {
      const testMediaStream = await AirmeetRTCClient.captureTestStream(mediaConstraint);
      if (testMediaStream) {
        AirmeetRTCClient.attachMediaStream(testMediaStream, videoEl.current);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

  }, []);

  useEffect(() => {
    testLocalStream();
    return () => AirmeetRTCClient.releaseTestStream();
  }, []);

  return (
    <div className="testvideo">
      <div
        className={`testvideo-loader ${loading ? "d-flex" : "d-none"} align-items-center justify-content-center`}
        style={{
          width: TEST_VIDEO_WIDTH,
          height: TEST_VIDEO_HEIGHT,
        }}
      >
        Loading...
      </div>
      <div
        className="testvideo-container position-relative"
        style={{
          borderRadius: 6,
          width: TEST_VIDEO_WIDTH,
          height: TEST_VIDEO_HEIGHT,
        }}
      >
        {showVideo ? (
          <div className="w-100 h-100" ref={videoEl} />
        ) : (
          <div className="testvideo-novideo d-flex align-items-center justify-content-center w-100 h-100">
            No Video
          </div>
        )}
        <div className="testvideo-control-panel d-flex align-items-center justify-content-between position-absolute w-100 mb-2 pr-2 pl-2">
          <div className="text-white">User</div>
          <div>
            <Button
              className="mr-2"
            >
              Audio
            </Button>
            <Button>
              Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestVideo;
