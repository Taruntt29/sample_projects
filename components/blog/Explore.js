import React from "react"

const Explore = () => {
    return (
        <>
            <div className="bg-primary  py-12 ">
                <div className="md:flex justify-between items-center container px-8 ">
                <div>
                    <p className="text-base font-normal text-white">
                        Explore New Life
                    </p>

                    <p className="text-4xl font-s-bold text-white pt-3">
                        Build your Personal <br /> Account Profile
                    </p>

                </div>

                <div>

                    <button className="bg-white text-primary hover:bg-secondary px-10 py-3 rounded-xl font-s-medium md:mt-0 mt-5">
                        Build your Resume with us
                    </button>
                </div>
                </div>
            </div>

        </>
    )
}

export default Explore