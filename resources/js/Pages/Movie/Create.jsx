import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Sidebar from "@/Includes/Sidebar";
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Breadcrumb from "@/Components/Breadcrumb";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import TextInputFile from "@/Components/TextInputFile";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });
    const submit = (e) => {
        e.preventDefault();

        post(route("genre.store"));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Add Movie
                </h2>
            }
        >
            <Head title="Add Movie" />
            <Sidebar />
            <div className=" mx-[30px] min-h-[calc(100vh-195px)] mb-[30px] ssm:mt-[30px] mt-[15px]">
                <Breadcrumb title="New Movie" />
                <div className="grid grid-cols-1">
                    <div className="w-full">
                        <div className="p-[25px] bg-white dark:bg-box-dark rounded-10 relative text-[15px] text-body dark:text-subtitle-dark leading-6">
                            <div>
                                <form onSubmit={submit}>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="w-full">
                                            <InputLabel
                                                value="Title"
                                                htmlFor="title"
                                            />

                                            <TextInput
                                                id="title"
                                                value={data.title}
                                                autoComplete="title"
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                                required={true}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputLabel
                                                value="Genre"
                                                htmlFor="genre_id"
                                            />

                                            <TextInput
                                                id="genre_id"
                                                value={data.genre_id}
                                                autoComplete="genre_id"
                                                onChange={(e) =>
                                                    setData(
                                                        "genre_id",
                                                        e.target.value
                                                    )
                                                }
                                                required={true}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputLabel
                                                value="Actors"
                                                htmlFor="actors"
                                            />

                                            <TextInput
                                                id="actors"
                                                value={data.actors}
                                                autoComplete="actors"
                                                onChange={(e) =>
                                                    setData(
                                                        "actors",
                                                        e.target.value
                                                    )
                                                }
                                                required={true}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputLabel
                                                value="Director"
                                                htmlFor="director"
                                            />

                                            <TextInput
                                                id="director"
                                                value={data.director}
                                                autoComplete="director"
                                                onChange={(e) =>
                                                    setData(
                                                        "director",
                                                        e.target.value
                                                    )
                                                }
                                                required={true}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputLabel
                                                value="Release Date"
                                                htmlFor="release_date"
                                            />

                                            <TextInput
                                                id="release_date"
                                                value={data.release_date}
                                                autoComplete="release_date"
                                                onChange={(e) =>
                                                    setData(
                                                        "release_date",
                                                        e.target.value
                                                    )
                                                }
                                                required={true}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputLabel
                                                value="Country"
                                                htmlFor="country"
                                            />

                                            <TextInput
                                                id="country"
                                                value={data.country}
                                                autoComplete="country"
                                                onChange={(e) =>
                                                    setData(
                                                        "country",
                                                        e.target.value
                                                    )
                                                }
                                                required={true}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputLabel
                                                value="Thumbnail"
                                                htmlFor="thumbnail"
                                            />

                                            <TextInputFile
                                                id="thumbnail"
                                                type="file"
                                                value={data.thumbnail}
                                                autoComplete="thumbnail"
                                                onChange={(e) =>
                                                    setData(
                                                        "thumbnail",
                                                        e.target.value
                                                    )
                                                }
                                                required={true}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <InputLabel
                                                value="Description"
                                                htmlFor="description"
                                            />

                                            <TextArea
                                                id="description"
                                                value={data.description}
                                                autoComplete="description"
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                                required={true}
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-10">
                                        <Link href={route("genre.index")}>
                                            <SecondaryButton className="w-full">
                                                Cancel
                                            </SecondaryButton>
                                        </Link>
                                        <PrimaryButton
                                            type="submit"
                                            className="w-full"
                                        >
                                            {processing ? "Adding..." : "Save"}
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
