import React from "react";
import style from "./Bem.module.css";

export const Bem = () => {
    let ref = React.useRef<any>(52);
    const [state, setState] = React.useState(false);
    let test = 0;
    React.useEffect(() => {
        console.log(ref.current);
    }, [state]);

    return (
        <div className={style.container}>
            <div className={style.about_block}>
                <h1
                    // ref={ref}
                    className={`${style.about_block__title} ${style.title}`}
                    onClick={() => {
                        // ref.current = 0;
                        // setState(!state);
                        // ref.current.onclick = function(){console.log('ОБновил')};
                        test = test + 1;
                        console.log(test);
                    }}
                >
                    About
                </h1>
                <input
                    placeholder="dsdsd"
                    ref={ref}
                    onClick={() => {
                        console.log("НАЖАЛ");
                    }}
                />
                <div className={style.border_decor_block}></div>
                <p
                    className={`${style.about_block__subtitle} ${style.subtitle}`}
                >
                    Let me introduce myself. My name is Mariya I am a
                    20-year-old student from Donetsk. I study at the university
                    in my native town and my future profession is bookkeeping. I
                    live with my parents and my elder sister Lena. We are a
                    friendly family. Lena is 2 years older than me. We share our
                    room and tell all our secrets to each other.
                </p>
            </div>

            <div className={style.card_container}>
                <div className={style.card}>
                    <img className={style.card_image} />
                    <h1 className={`${style.card_title} ${style.title}`}>
                        Web
                    </h1>
                    <p className={`${style.card_subtitle} ${style.subtitle}`}>
                        Let me introduce myself. My name is Mariya I am a
                        20-year-old student from Donetsk. I study at the
                        university in my native town and my future profession is
                        bookkeeping.
                    </p>
                </div>
            </div>
            {/* <video width="480" controls> */}
            {/* <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/live/lG1oMTEGVsY?si=VFxKPW0OLxR0sXB2"
            ></iframe> */}
            {/* <source
                    src="https://youtu.be/r0C64V-eRXw?si=ExNE3W1E_iZNHf7I"
                    type="video/mp4"
                /> */}
            {/* </video> */}
            {/* 
            <iframe
                width="100%"
                height="100%"
                src={'https://www.youtube.com/live/lG1oMTEGVsY?si=VFxKPW0OLxR0sXB2'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Live Stream"
            ></iframe> */}
        </div>
    );
};
