import React from "react";
import dynamic from "next/dynamic";

const LocatorMap = dynamic(() => import("@/components/maps/LocatorMap"), {ssr: false});

const page = () => {
  return (
    <div className="container mx-auto min-h-full flex flex-col justify-center mb-12 mt-4 lg:mt-6">
      <h1 className="text-3xl font-bold text-gray-900">Daftar Nasi Lemak</h1>
      <div className="bg-white overflow-hidden shadow rounded-lg mt-4">
        <div className="px-4 py-5 sm:p-6">
          <div>
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="space-y-6 sm:space-y-5">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Basic Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Almost all coffee shop that can serve freshly brewed arabica
                    coffee such as hot american is eligible to be listed here.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    <span className="font-bold">
                      We have the right to reject
                    </span>
                    a submission that we think is not suitable for us.
                  </p>
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      htmlFor="coffee_shop_name"
                    >
                      {`Nama Warung Nasi Lemak*`}
                      <div className="mt-1 text-sm text-gray-500">
                        If no name, nickname is fine.
                      </div>
                    </label>{" "}
                    <div className="mt-1 sm:self-center flex items-center">
                      <input
                        className="block max-w-lg w-full border border-gray-800 rounded p-2"
                        type="text"
                        name="coffee_shop[name]"
                        id="coffee_shop_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      htmlFor="coffee_shop_name"
                    >
                      {`Location`}
                    </label>{" "}
                    <div className="mt-1 sm:self-center flex items-center">
                      <LocatorMap />
                    </div>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      htmlFor="coffee_shop_name"
                    >
                      {`Category`}
                    </label>{" "}
                    <div>
                      <div className="mt-1 sm:self-center flex items-center">
                        <input
                          type="checkbox"
                          id="earlyMorning"
                          name="earlyMorning"
                          value="earlyMorning"
                        />
                        <label className="ml-3 block text-sm " htmlFor="tag_6">
                          <span className="font-medium text-gray-700">
                          🌅 Early Morning
                          </span>
                          <div className="text-gray-500 sm:inline">
                            <span className="hidden sm:inline">-</span>
                            Start at 6.00am until 10am
                          </div>
                        </label>
                      </div>
                      <div className="mt-1 sm:self-center flex items-center">
                        <input
                          type="checkbox"
                          id="breakfast"
                          name="breakfast"
                          value="breakfast"
                        />
                        <label className="ml-3 block text-sm " htmlFor="tag_6">
                          <span className="font-medium text-gray-700">
                          🌄 Breakfast
                          </span>
                          <div className="text-gray-500 sm:inline">
                            <span className="hidden sm:inline">-</span>
                            Start at 6.00am until 10am
                          </div>
                        </label>
                      </div>
                      <div className="mt-1 sm:self-center flex items-center">
                        <input
                          type="checkbox"
                          id="lunch"
                          name="lunch"
                          value="lunch"
                        />
                        <label className="ml-3 block text-sm " htmlFor="tag_6">
                          <span className="font-medium text-gray-700">
                            🌇 Lunch
                          </span>
                          <div className="text-gray-500 sm:inline">
                            <span className="hidden sm:inline">-</span>
                            Start at 6.00am until 10am
                          </div>
                        </label>
                      </div>
                      <div className="mt-1 sm:self-center flex items-center">
                        <input
                          type="checkbox"
                          id="dinner"
                          name="dinner"
                          value="dinner"
                        />
                        <label className="ml-3 block text-sm " htmlFor="tag_6">
                          <span className="font-medium text-gray-700">
                          🌃 Dinner
                          </span>
                          <div className="text-gray-500 sm:inline">
                            <span className="hidden sm:inline">-</span>
                            Start at 6.00am until 10am
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      htmlFor="coffee_shop_name"
                    >
                      {`Halal Info`}
                    </label>{" "}
                    <div className="mt-1 sm:self-center flex items-center">
                      <div>
                        <div className="mt-1 sm:self-center flex items-center">
                          <input
                            type="radio"
                            id="halal"
                            name="halal"
                            value="halal"
                          />
                          <label className="ml-3 block text-sm " htmlFor="tag_6">
                            <span className="font-medium text-gray-700">
                            👳🏻 Muslim Own
                            </span>
                            <div className="text-gray-500 sm:inline">
                              <span className="hidden sm:inline">-</span>
                              Start at 6.00am until 10am
                            </div>
                          </label>
                        </div>
                        <div className="mt-1 sm:self-center flex items-center">
                          <input
                            type="radio"
                            id="nonHalal"
                            name="nonHalal"
                            value="nonHalal"
                          />
                          <label className="ml-3 block text-sm " htmlFor="tag_6">
                            <span className="font-medium text-gray-700">
                              Non-Halal
                            </span>
                            <div className="text-gray-500 sm:inline">
                              <span className="hidden sm:inline">-</span>
                              Start at 6.00am until 10am
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      htmlFor="coffee_shop_name"
                    >
                      {`Payment Info`}
                    </label>{" "}
                    <div className="mt-1 sm:self-center flex items-center">
                      <div>
                        <div className="mt-1 sm:self-center flex items-center">
                          <input
                            type="radio"
                            id="cash"
                            name="cash"
                            value="cash"
                          />
                          <label className="ml-3 block text-sm " htmlFor="tag_6">
                            <span className="font-medium text-gray-700">
                            💵 Cash Only
                            </span>
                            <div className="text-gray-500 sm:inline">
                              <span className="hidden sm:inline">-</span>
                              Please bring enough cash
                            </div>
                          </label>
                        </div>
                        <div className="mt-1 sm:self-center flex items-center">
                          <input
                            type="radio"
                            id="cashLess"
                            name="cashLess"
                            value="cashLess"
                          />
                          <label className="ml-3 block text-sm " htmlFor="tag_6">
                            <span className="font-medium text-gray-700">
                            📱 CashLess
                            </span>
                            <div className="text-gray-500 sm:inline">
                              <span className="hidden sm:inline">-</span>
                              Bagsa Cashless no worries
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      htmlFor="coffee_shop_name"
                    >
                      {`Type of Stall`}
                      <div className="mt-1 text-sm text-gray-500">
                        If no name, nickname is fine.
                      </div>
                    </label>{" "}
                    <div className="mt-1 sm:self-center flex items-center">
                      <select className="block max-w-lg w-full border border-gray-800 rounded p-2">
                        <option value="stall">🏪 Stall Pacak</option>
                        <option value="warung">⛱ Warung</option>
                      </select>
                      
                    </div>
                  </div>
                </div>
                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 ">
                    <label
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      htmlFor="coffee_shop_name"
                    >
                      {`Must Try Combination*`}
                      <div className="mt-1 text-sm text-gray-500">
                        The best lauk-pauk combination that you must try.
                      </div>
                    </label>{" "}
                    <div className="mt-1 sm:self-center flex items-center">
                      <textarea
                        className="block max-w-lg w-full border border-gray-800 rounded p-2"
                        name="combinationLauk"
                        id="combinationLauk"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="pt-6 space-y-6 sm:pt-10 sm:space-y-5">
                  <div className="sm:flex sm:gap-4 sm:justify-end sm:border-t sm:border-gray-200 sm:pt-5 ">
                    <button
                      type="submit"
                      className="bg-gray-800 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
