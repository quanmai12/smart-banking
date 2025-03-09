import { useEffect, useRef, useState } from "react";
import Button from "../../components/button/button";

export default function CameraCapture() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isBackSide, setIsBackSide] = useState(false);
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setHasPermission(true);
        } catch (error) {
            console.error("Camera access denied:", error);
            setHasPermission(false);
        }
    };

    useEffect(() => {
        startCamera();
    }, []);

    const captureImage = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            const context = canvas.getContext("2d");
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL("image/png");
            setCapturedImage(imageData);
            if (!isBackSide) {
                setFrontImage(capturedImage); 
            } else {
                setBackImage(capturedImage);
            }
        }
    };

    const handleUsePicture = () => {
        if (!isBackSide) {
            setCapturedImage(null);
            setIsBackSide(true);
            startCamera();
        } else {
            stopCamera();
            console.log("Both images captured, proceed to next step");
            navigate("/next-step");
        }
    };

    const handleRetake = () => {
        setCapturedImage(null);
        if(isBackSide) {
            setBackImage(null);
        } else {
            setFrontImage(null);
            setBackImage(null);
            setIsBackSide(false);
        }
        startCamera(); 
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            let tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }
    };

    return (
        <div className="relative flex flex-col items-center h-screen bg-[#00252B] text-white px-4">
            <div className="w-full pt-6 text-center">
                <div className="flex items-center justify-between mb-6">
                    <img src="/image/left-arrow.svg" alt="" className="h-[22px] w-[18px]" />
                    <h2 className="text-lg font-semibold text-white mx-auto">Verify your identity</h2>
                </div>
                <p className="text-[16px] text-gray-300 mt-1">
                    Position all 4 corners of the page clearly in the frame and take a picture.
                </p>
            </div>

            <div className="relative w-full flex flex-col items-center">
                {/* back of the card */}
                {isBackSide && (
                    <img
                        src="/image/rotate-icon.svg"
                        alt="Rotate Icon"
                        className="absolute top-[110px] w-18 h-18 "
                    />
                )}

                {/* Camera Frame */}
                <div className="absolute top-[170px] px-4 w-[calc(100vw-2rem)] max-w-[400px] h-[240px] md:h-[260px] border-2 border-white rounded-[20px] overflow-hidden">
                    {capturedImage ? (
                        <img src={capturedImage} alt="Captured" className="w-full h-full object-cover" />
                    ) : (
                        <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover"></video>
                    )}
                </div>

                {/* desribe */}
                <p className="absolute top-[430px] text-white text-lg font-semibold">
                    {isBackSide ? "Back of the card" : "Front of the card"}
                </p>
            </div>


            {/* Capture Button */}
                {capturedImage ? (
                    <div className="w-full max-w-md text-center pb-5 absolute bottom-5 left-1/2 -translate-x-1/2 px-4">
                        <Button
                            text="Use this picture"
                            className="text-[#134555] bg-secondary w-full"
                            onClick={handleUsePicture}
                        />
                        <Button 
                            text="Retake picture" 
                            className="bg-[#265565] text-white w-full" 
                            onClick={handleRetake}     
                        />
                    </div>                   
                ): (
                    <>
                        <div className="w-full max-w-md text-center pb-5 absolute bottom-5 left-1/2 -translate-x-1/2 px-4">
                            <button
                                className="mt-[200px] mx-auto w-20 h-20 rounded-full flex items-center border-4 justify-center "
                                onClick={captureImage}
                            >
                                <div className="w-[66px] h-[66px] bg-white rounded-full mx-auto"></div>
                            </button>
                            <img src="/image/onfido-logo.svg" alt="" className="mx-auto mt-2 w-[70px] h-[20px]" />
                        </div>
                    </>
                )
                }

            <canvas ref={canvasRef} className="hidden" width="300" height="200"></canvas>
        </div>
    );
}
