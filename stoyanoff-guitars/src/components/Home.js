import React, { useEffect, useRef } from 'react';

const Home = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
            console.log('Home component loaded, video element found');
        } else {
            console.log('Home component loaded, video element not found');
        }
    }, []);

    return (
        <div className="home-container">
            <div className="video-overlay"></div>
            <video ref={videoRef} autoPlay muted loop className="background-video">
                <source src="/videos/background_vid.MP4" type="video/mp4" />
                Вашият браузър не поддържа видео.
            </video>
            <div className="content">
                <h2>Добре дошли в Stoyanoff Guitars</h2>
                <p>Ние създаваме ръчно изработени китари с внимание към всеки детайл. Нашата страст към музиката и висококачествената изработка гарантират уникални инструменти, които ще ви вдъхновяват.</p>
                <section>
                    <h2>Нашите китари</h2>
                    <p>Stoyanoff Guitars е специализиран в създаването на уникални, ръчно изработени китари. Всяка китара е направена с внимание към детайлите и страст към музиката.</p>
                </section>
            </div>
        </div>
    );
}

export default Home;
