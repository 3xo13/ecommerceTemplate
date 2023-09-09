import Link from "next/link"

const Footer = () => {
    return (
        <div className="footer-container w-screen h-[20vh] flex-center">
            <div className="footer-wrapper flex-row-center w-[94%] h-[94%] pl-10">
                <div className="w-1/2 h-full flex flex-col  justify-center">
                    <div className="flex flex-col ">
                        <h3>Need assesstance?</h3><br/>
                        <p>our support team is avaliable</p>
                    </div>
                    <div className="contact-wrapper  flex flex-col items-start ">
                        <div className="contact flex-row-center gap-5 mt-5">
                            <img src="/assets/icons/contact/phone.svg" alt="icon" className="w-5 h-5" />
                            <Link href={`/`}>
                                <p>+1 234 567 89 10</p>
                            </Link>
                        </div>
                        <div className="contact flex-row-center gap-5">
                            <img src="/assets/icons/contact/envelope.svg" alt="icon" className="w-5 h-5" />
                            <Link href={`/`}>
                                <p>example@provider.com</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col items-end justify-center pr-10">
                    <div className="flex flex-row justify-end w-full gap-5 h-3/12 px-5  ">
                        <h5>K-commerce</h5>
                        <img src="/assets/icons/general/paw.svg" alt="logo" className="w-6 h-6 "/>
                    </div>
                    <p className="w-full px-5 text-end mt-5">only the best carefully-selected products</p>
                    <div className="social-bar flex-row-center gap-5 px-5 mt-5">
                        <Link href='https://www.twitter.com/' target="blank">
                            <img src="/assets/icons/social/twitter.svg" alt="" className="w-5 h-5"/>
                        </Link>
                        <Link href='https://www.instagram.com/' target="blank">
                            <img src="/assets/icons/social/instagram.svg" alt="" className="w-5 h-5"/>
                        </Link>
                        <Link href='https://www.facebook.com/' target="blank">
                            <img src="/assets/icons/social/facebook-square.svg" alt="" className="w-5 h-5"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer