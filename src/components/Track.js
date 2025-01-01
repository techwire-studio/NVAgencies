import React, { useState } from "react";

const OrderTracking = () => {
    const [orderNumber, setOrderNumber] = useState("");
    const [emailPhone, setEmailPhone] = useState("");
    const [trackingNumber, setTrackingNumber] = useState("");
    const [showErrors, setShowErrors] = useState(false);

    const handleTrack = () => {
        setShowErrors(true);
    };

    return (
        <div className="bg-[#FAF7F0] min-h-screen flex items-center justify-center py-8 px-4 sm:px-8">
            <div className="bg-[#FFFCF9] shadow-md rounded-lg p-10 max-w-4xl w-full">

                <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#6B0000] mb-10">
                    Track Your Order
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
    
                    <div>
                        <label
                            htmlFor="orderNumber"
                            className="block text-sm font-medium text-[#6B0000] mb-2"
                        >
                            Order Number
                        </label>
                        <input
                            type="text"
                            id="orderNumber"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-[#6B0000] focus:border-[#6B0000]"
                            placeholder="Enter Order Number"
                        />
                        {showErrors && !orderNumber && (
                            <p className="text-[#FF0000] text-sm mt-2">
                                Order Number is required
                            </p>
                        )}

                        <label
                            htmlFor="emailPhone"
                            className="block text-sm font-medium text-[#6B0000] mt-6 mb-2"
                        >
                            Email or Phone Number
                        </label>
                        <input
                            type="text"
                            id="emailPhone"
                            value={emailPhone}
                            onChange={(e) => setEmailPhone(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-[#6B0000] focus:border-[#6B0000]"
                            placeholder="Enter Email or Phone"
                        />
                        {showErrors && !emailPhone && (
                            <p className="text-[#FF0000] text-sm mt-2">
                                Email or Phone Number is required
                            </p>
                        )}

                        <button
                            onClick={handleTrack}
                            className="mt-6 bg-[#B30000] text-white font-semibold py-3 px-8 rounded-md text-lg hover:bg-[#990000] transition"
                        >
                            Track
                        </button>
                    </div>

                    <div>
                        <label
                            htmlFor="trackingNumber"
                            className="block text-sm font-medium text-[#6B0000] mb-2"
                        >
                            Tracking Number
                        </label>
                        <input
                            type="text"
                            id="trackingNumber"
                            value={trackingNumber}
                            onChange={(e) => setTrackingNumber(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-[#6B0000] focus:border-[#6B0000]"
                            placeholder="Enter Tracking Number"
                        />
                        {showErrors && !trackingNumber && (
                            <p className="text-[#FF0000] text-sm mt-2">
                                Tracking Number is required
                            </p>
                        )}

                        <button
                            onClick={handleTrack}
                            className="mt-6 bg-[#B30000] text-white font-semibold py-3 px-8 rounded-md text-lg hover:bg-[#990000] transition"
                        >
                            Track
                        </button>
                    </div>
                </div>

                <div className="text-gray-500 text-sm text-center mt-10">
                    Powered by Track123
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
