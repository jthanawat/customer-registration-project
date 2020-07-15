import React from 'react'
import Webcam from "react-webcam";
import { Button } from '@material-ui/core'
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );
  return (
    <>
      <div>
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={200}
          videoConstraints={videoConstraints}
        />
      </div>
      <Button onClick={capture}
        color="primary"
        size="medium"
        type="submit"
        variant="contained">Capture photo</Button>
    </>
  );
};

export default WebcamCapture;