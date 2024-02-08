import Wrapper from "../Wrapper"
import Image from 'next/image';

function Navbar() {
    return (
        <Wrapper className="flex justify-between items-center h-[60px] bg-bgNeel text-textWhite">
            <div className="flex justify-center items-center max-h-[55px]">
                Logo
            </div>
            <div className="flex items-center max-h-[55px]">
                <div className="flex justify-center items-center gap-2 capitalize relative group/user">
                    <span>
                        <Image src="/assets/images/first.jpg" width={55} height={55} className="w-[45px] h-[45px] rounded-full border-[1px] border-white" alt="mandir sewa" />
                    </span>
                    <section className="flex flex-col justify-center items-start my-auto">
                        <span className="leading-4"> Shivam Mittal </span>
                        <span className="leading-4 font-semibold text-sm">
                            Admin
                        </span>
                    </section>
                    <section className="absolute hidden right-0 top-full text-textNeel py-1 min-w-[160%] group-hover/user:flex z-[99]">

                        <div className="flex flex-col gap-1 justify-center items-center w-[100%] bg-white shadow-shadowDown pt-3 border-[1px] rounded">
                            <span className="px-3 font-semibold">
                                Shivam Mittal
                            </span>
                            <span className="px-3 lowercase mb-3">
                                twinkle9997@gmail.com
                            </span>
                            <span className="p-2 bg-bgSafron text-textWhite w-full text-center hover:bg-bgNeel duration-100 cursor-pointer rounded-b">
                                Logout
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar