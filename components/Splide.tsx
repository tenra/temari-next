import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import styles from '../styles/slider.module.scss';

export const SplideSlider = () => {
    return (
        <>
            <Splide
                aria-label="私のお気に入りの画像集"
                options={{
                    type: "fade",
                    autoplay: true,// 自動再生を有効
                    interval: 6000,//次のスライドに行くまでの速さ
                    speed: 4000,//ページ送りアニメーションの速さ
                    arrows: false,
                    //pagination: false,
                    rewind: true,
                }}
            >
                <SplideSlide>
                    <div className={styles.slider_image}>
                        <Image src="/top.jpg" alt="temari image" layout="fill" objectFit="cover" />
                        <h2 className={styles.slider_image_message}>
                            <p>住み慣れた我が家を一歩出て</p>
                            <p>デイサービスセンターてまりで</p>
                            <p>一日過ごされませんか</p>
                        </h2>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={styles.slider_image}>
                        <Image src="/riha.jpg" alt="temari image" layout="fill" objectFit="cover" />
                        <h2 className={`${styles.slider_image_message} ${styles.slider_image_message_2nd}`}>
                            <p>リハビリも楽しく</p>
                            <p>がんばれる</p>
                        </h2>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={styles.slider_image}>
                        <Image src="/sky.jpg" alt="temari image" layout="fill" objectFit="cover" />
                        <h2 className={`${styles.slider_image_message} ${styles.slider_image_message_3nd}`}>
                            新しい楽しみを<br className="hidden sm:block" />みつけてみませんか
                        </h2>
                    </div>
                </SplideSlide>
            </Splide>
        </>
    );
}
