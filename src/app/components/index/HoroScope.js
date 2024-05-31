import Wrapper from "@/app/components/Wrapper"
import Link from 'next/link';
import Card from "@/app/components/index/HoroscopeCard";

function HoroscopeCard() {
    return (<div className="flex flex-col gap-1 my-16">

        <b> Note: Please read this before reading your today's horoscope: </b>

        <p>
            Horoscopes, which make predictions about your future based on your zodiac sign, are frequently found in newspapers, journals, and online. Every one of the Zodiac's twelve signs corresponds to a certain date during the year. For instance, you are an Aries if your birthday falls between March 21 and April 19.
        </p>
        <p>
            Some people find it enjoyable to read their horoscopes and may even find the forecasts or advice to be useful or correct. It is crucial to realise, nevertheless, that there is no scientific evidence to back the notion that the 12 zodiac signs hold the key to the destiny of billions of individuals worldwide. Every individual's life is different, shaped by an intricate web of interpersonal relationships, personal decisions, and innumerable other extraterrestrial elements.
        </p>

        <p>
            Horoscopes are too generic to be able to forecast the future with precision for everyone. A horoscope's few lines may speak to you personally, but they may also apply to a wide range of other individuals. Because of the way our brains interpret information, general and ambiguous comments are sometimes taken to be highly accurate about an individual. This phenomenon is known as the Forer effect.
        </p>

        <p>
            Horoscopes are entertaining to read and may provide some general guidance or understanding, but they shouldn't be regarded as an accurate forecast of the future. Numerous things influence our life, and it is unfounded in science to assume that these can be reduced to a few sentences depending on our zodiac sign. Horoscopes aren't a perfect forecast for the future, so it's always better to approach them with curiosity and amusement.
        </p>

        <div className={`grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8`}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    </div>

    )
}

export default HoroscopeCard