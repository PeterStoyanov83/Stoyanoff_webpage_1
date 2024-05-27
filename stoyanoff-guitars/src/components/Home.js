// src/components/Home.js
import React, {useEffect, useRef} from 'react';
import '../App.css'; // Import the CSS file
import Container from './Container';
import backgroundVideo from "../assets/videos/video_1.mp4"

const Home = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <Container>
            <div className="video-overlay"></div>
            <video ref={videoRef} autoPlay muted loop className="background-video">
                <source className='background-video' src={backgroundVideo} type="video/mp4"/>
                Вашият браузър не поддържа видео.
            </video>
            <div className="content">
                <h2>Добре дошли в Stoyanoff Guitars</h2>

                <section>
                    <h2>Нашите китари</h2>
                    <p>
                        Stoyanoff Guitars е специализиран в създаването на уникални, ръчно изработени китари. Всяка
                        китара е направена с внимание към детайлите и страст към музиката.
                    </p>
                </section>
            </div>
        </Container>
    );
}

export default Home;