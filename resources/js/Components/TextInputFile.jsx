import React from "react";

export default function TextInputFile() {
    return (
        <>

            <div class="">
                <input type="file" id="fileInput" class="hidden" />
                <label
                    for="fileInput"
                    class="cursor-pointer text-start mt-1 p-3 flex items-stretch justify-start w-full text-sm leading-6 font-medium rounded-xl ring-1 ring-gray-300 border-gray-300 shadow-sm hover:border-indigo-500 hover:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-indigo-600 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 dark:text-gray-300"
                >
                    <div class="flex items-center border-r border-gray-300 dark:border-gray-600 pr-2">
                        <i class="uil uil-cloud-upload me-2"></i>
                        <span>Pilih File</span>
                    </div>
                    <div class="flex-grow relative">
                        <div class="absolute top-0 bottom-0 left-0 w-px bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                </label>
            </div>
        </>
    );
}
