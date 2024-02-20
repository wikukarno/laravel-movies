import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Sidebar from "@/Includes/Sidebar";
import React, { useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DataTable from "react-data-table-component";
import Breadcrumb from "@/Components/Breadcrumb";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import ModalDelete from "@/Components/ModalDelete";
import Modal from "@/Components/Modal";

export default function Index({ auth, genre }) {
    const [filterText, setFilterText] = useState("");
    const filterItem = genre.filter((item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const { data, setData, delete: destroy, reset } = useForm({});

    // show hide handle modal delete
    const [confirmingGenreDeletion, setConfirmingGenreDeletion] =
        useState(false);

    const [dataGenre, setDataGenre] = useState(null);

    const confirmGenreDeletion = (id) => {
        setDataGenre(id);
        setConfirmingGenreDeletion(true);
    };

    const closeModal = () => {
        setConfirmingGenreDeletion(false);
    };

    const deleteGenre = async (e) => {
        e.preventDefault();
        try {
            await destroy(route("genre.destroy", dataGenre), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex">
                    <Link
                        href={route("genre.edit", row.id)}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <SecondaryButton>Edit</SecondaryButton>
                    </Link>
                    <DangerButton onClick={() => confirmGenreDeletion(row.id)}>
                        Delete
                    </DangerButton>
                </div>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Genre" />
            <Sidebar />
            <div className=" mx-[30px] min-h-[calc(100vh-195px)] mb-[30px] ssm:mt-[30px] mt-[15px]">
                <Breadcrumb title="Genre" />
                <div className="grid grid-cols-1">
                    <div className="w-full">
                        <div className="p-[25px] bg-white dark:bg-box-dark rounded-10 relative text-[15px] text-body dark:text-subtitle-dark leading-6">
                            <div className="flex justify-between">
                                <Link href={route("genre.create")}>
                                    <PrimaryButton>
                                        <i className="uil uil-plus me-2"></i>
                                        Add New
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <div className="pt-10">
                                <div className="flex justify-end">
                                    <TextInput
                                        label="Search"
                                        placeholder="Search"
                                        className="w-1/4 z-50"
                                        value={filterText}
                                        onChange={(e) =>
                                            setFilterText(e.target.value)
                                        }
                                    />
                                </div>
                                <DataTable
                                    columns={columns}
                                    data={filterItem}
                                    pagination
                                    subHeader
                                    selectableRows
                                    persistTableHead
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={confirmingGenreDeletion} onClose={closeModal}>
                <form onSubmit={deleteGenre} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ms-3">
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
