const { default: Image } = require("next/image")


function LuckyColor({ colorName = ["white"] }) {
    return (<p className="w-full bg-gray-100 backdrop-blur-sm p-2 flex justify-between gap-3 items-center rounded">
        {
            colorName.map((item, index) => <span className={`w-8 h-8 rounded-full`} key={index} style={{ background: item }}></span>)
        }
    </p>)
}



export default function Card({ bg = "#fff",  }) {
    return <div className={`flex flex-col gap-2 p-4 rounded-md w-full h-full bg-[${bg}] duration-300 shadow-lg`} style={{ background: bg }}>

        <section className="flex justify-center items-center gap-4">
            <Image src="/assets/images/aries.png" className="shadow-lg w-[80px] h-[80px] rounded-full" width={200} height={200} alt="logo" />

            <div className=" leading-4 text-start flex flex-col gap-1">
                <span className=" font-semibold text-lg leading-3">
                    Aries
                </span>
                <span>
                    a, aa, b, ba, sa, at, ak, ar, am, as, ma, pa, at
                </span>
                <span>
                    a, aa, b, ba, sa, at, ak, ar, am, as, ma, pa, at
                </span>
            </div>
        </section>
        <hr className="mt-1" />

        <section className="flex justify-center items-center h-[150px] text-black text-start">
            <p>
                Schnelle ist seufzer nebelferne zürntest zuletzt die schaust und gartens es. Mein werden im mutter im nicht liebe verschwand vom weißt. Heut glaube mein klingt dame vaterland da herzen du..
            </p>
        </section>
        <div className="text-start ">
            <div className="mt-2 font-semibold"> Lucky Colors </div>
            <LuckyColor colorName={["#4b1c26", "#C60000", "#F65500", "#D48D55"]} />
        </div>
        <hr />
        <div className="flex justify-between items-center capitalize mt-2">
            <span> Today </span>
            <span> Yesterday </span>
            <span> Tomorrow </span>
        </div>
    </div>
}