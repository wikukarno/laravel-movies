import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Sidebar from "@/Includes/Sidebar";
import React, { useEffect } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Breadcrumb from "@/Components/Breadcrumb";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Create({ auth }) {
    const genre = usePage().props.genre;
    const { data, setData, put, processing, errors, reset, wasSuccessful } =
        useForm({
            name: genre.name,
        });
    const submit = (e) => {
        e.preventDefault();

        put(route("genre.update", genre.id));
    };

    useEffect(() => {
        if (wasSuccessful) {
            toast.success("Genre updated successfully");
        }

        if (errors) {
            for (const key in errors) {
                toast.error(errors[key]);
            }
        }
    }, [wasSuccessful, errors]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Add Genre
                </h2>
            }
        >
            <Head title="Add Genre" />
            <Sidebar />
            <div className=" mx-[30px] min-h-[calc(100vh-195px)] mb-[30px] ssm:mt-[30px] mt-[15px]">
                <Breadcrumb title="New Genre" />
                <div className="grid grid-cols-1">
                    <div className="w-full">
                        <div className="p-[25px] bg-white dark:bg-box-dark rounded-10 relative text-[15px] text-body dark:text-subtitle-dark leading-6">
                            <div>
                                <form onSubmit={submit}>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="w-full">
                                            <InputLabel
                                                value="Name"
                                                htmlFor="name"
                                            />

                                            <TextInput
                                                id="name"
                                                value={data.name}
                                                autoComplete="name"
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-10">
                                        <Link href={route("genre.index")}>
                                            <SecondaryButton className="w-full">
                                                Back
                                            </SecondaryButton>
                                        </Link>
                                        <PrimaryButton
                                            type="submit"
                                            className="w-full"
                                        >
                                            {processing ? "Saving..." : "Save"}
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
}
