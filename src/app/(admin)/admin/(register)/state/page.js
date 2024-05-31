"use client";

import * as React from "react";

import MuiModal from "@/app/components/MuiModal";
import LabelInput from "@/app/components/form/LabeInput";
import InputFile from "@/app/components/form/InputFile";
import LabelInputEdit from "@/app/components/form/LabelInputEdit";
import Button from "@/app/components/Button";
import { useState, useEffect } from "react";

import axiosInstance from "@/app/util/axios";
import { DeleteButton, EditButton } from "@/app/components/admin/ActionButtons";
import { PiTrashDuotone } from "react-icons/pi";

import Image from "next/image";
import { TablePagination } from "@mui/material";
// import Error from '@/app/components/Error';

import { MdEditNote } from "react-icons/md";
import { CustomModal } from "@/app/components/CustomModal";
import CustomSelectDropdown from "@/app/components/CustomSelectDropdown";
import Popup from "@/app/components/sweetAlerts/Popup";
import SweetAlertWrapper from "@/app/components/sweetAlerts/SweetAlertWrapper";

function Td({ children, className }) {
  return (
    <td
      className={`font-semibold text-center w-auto px-3 whitespace-nowrap min-w-20 ${className}`}
    >
      {children}
    </td>
  );
}

export default function page() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState();
  const [states, setStates] = React.useState();

  const [countries, setCountries] = React.useState();

  const [isLoading, setIsLoading] = React.useState(false);
  const [stateData, setStateData] = React.useState({});

  // edited data
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [editCountryId, setEditCountryId] = React.useState();
  const [editSates, setEditSates] = React.useState();
  const [editFile, setEditFile] = React.useState();
  const [oldFiles, setOldFiles] = React.useState();

  // getting all data
  async function getAllCategories() {
    setIsLoading(true);
    try {
      const data = await axiosInstance.get("/get-all-states");
      const country = await axiosInstance.get("/get-all-countries");

      setCountries(country?.data?.data);
      setStates(data?.data?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  // getting all sub categories

  // all data
  useEffect(() => {
    getAllCategories();
  }, []);

  // pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // pagination

  // creating sub category
  const createSubCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", stateData?.file || "no data");
    formData.append("state", stateData.state);
    formData.append("country", stateData.countryId);

    if (stateData?.state !== "" || stateData?.countryId !== "") {
      setError("");
      try {
        const rec = await axiosInstance.post("/create-state", formData);

        setStates(rec?.data?.data);
      } catch (err) {
        setError(err?.response?.data?.message.errors[0].message);
      }
    } else {
      setError("State is important!");
    }
  };

  // delete sub category
  const deleteThis = async (item) => {
    try {
      const rec = await axiosInstance.delete(`/delete-state/${item.id}`);
      if (rec.data.status === "success") {
        setStates(rec.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // edit record
  const editModal = async (e) => {
    e.preventDefault();

    const userFormData = new FormData();
    userFormData.append("files", editFile || "no file");
    userFormData.append("state", editSates);
    userFormData.append("countryId", editCountryId);
    userFormData.append("oldFile", oldFiles.oldFile);
    userFormData.append("stateId", oldFiles.stateId);
    userFormData.append("oldProcess", oldFiles.oldProcess);

    try {
      const update = await axiosInstance.put("/update-state", userFormData);
      setStates(update.data.data);
      setShowEditModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="w-full px-5">
        <div className="flex justify-end my-4">
          <MuiModal
            header="Create Sub-Category"
            modalButton="Create State"
            buttonCss="rounded-md bg-butSafron text-textWhite py-2 shadow-shadowDownL hover:shadow-none duration-200 px-3 hover:bg-bgSafron"
          >
            <form onSubmit={createSubCategory}>
              {/* <Error error={error} className="text-sm" /> */}
              <div className="flex flex-col gap-4">
                <CustomSelectDropdown
                  title="Country"
                  value={stateData?.countryId}
                  onChange={(e) =>
                    setStateData({ ...stateData, countryId: e.target.value })
                  }
                >
                  {countries?.map((item, index) => (
                    <option className="min-h-14" value={item.id} key={index}>
                      {item.country}
                    </option>
                  ))}
                </CustomSelectDropdown>

                <LabelInput
                  type="text"
                  label="State"
                  className="py-2"
                  value={stateData?.state}
                  onChange={(e) =>
                    setStateData({ ...stateData, state: e.target.value })
                  }
                />

                <label className="flex flex-col">
                  <span>File</span>

                  <InputFile
                    onChange={(e) =>
                      setStateData({ ...stateData, file: e.target.files[0] })
                    }
                  />
                </label>

                <Button
                  type="submit"
                  className="max-w-[130px] mx-auto bg-butNeel mt-4"
                >
                  Save
                </Button>
              </div>
            </form>
          </MuiModal>
        </div>

        <section className="flex flex-col w-full max-h-[600px]">
          <section className="max-h-[500px] border relative w-full overflow-x-auto hs overflow-y-auto vs mx-auto">
            {isLoading ? (
              <span className="text-2xl font-extrabold"> loading... </span>
            ) : (
              <table className="text-center w-full mx-auto">
                <thead className="h-12 bg-bgNeel text-textWhite sticky top-0 w-full capitalize">
                  <tr>
                    <th className="px-2">Sno.</th>
                    <th className="px-2">States</th>
                    <th className="px-2">State File</th>
                    <th className="px-2"> Country </th>
                    <th className="px-2">File</th>
                    <th className="px-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {states
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((item, index) => {
                      return (
                        <tr
                          className="min-h-12 h-12 odd:hover:bg-bgSafron even:hover:bg-bgNeel hover:text-white odd:bg-slate-50 duration-200"
                          tabIndex={-1}
                          key={index}
                        >
                          <Td>{rowsPerPage * page + index + 1}</Td>
                          <Td>
                            <div className="flex flex-start capitalize">
                              {item.state}
                            </div>
                          </Td>
                          <Td>
                            <div className="mx-auto flex justify-center items-center">
                              <Image
                                src={
                                  item.file !== "no file"
                                    ? item?.file
                                    : "/assets/images/first.jpg"
                                }
                                className="w-10 h-10 rounded-full"
                                width={60}
                                height={60}
                                alt="photo title"
                                loading="lazy"
                              />
                            </div>
                          </Td>
                          <Td>
                            <span className="capitalize">
                              {item.country.country}
                            </span>
                          </Td>
                          <Td>
                            <div className="mx-auto flex justify-center items-center">
                              <Image
                                src={
                                  item?.country?.processFile !== "no file"
                                    ? `${item?.country?.processFile}`
                                    : "/assets/images/first.jpg"
                                }
                                className="w-10 h-10 rounded-full"
                                width={60}
                                height={60}
                                alt="photo title"
                                loading="lazy"
                              />
                            </div>
                          </Td>

                          <Td>
                            <section className="flex gap-2 items-center justify-center">
                              <DeleteButton onClick={() => deleteThis(item)}>
                                <PiTrashDuotone size={20} />
                              </DeleteButton>

                              <EditButton
                                onClick={() => {
                                  setEditCountryId(item.countryId);
                                  setEditSates(item.state);
                                  setOldFiles({
                                    ...oldFiles,
                                    oldProcess: item.processFile,
                                    oldFile: item.file,
                                    stateId: item.id,
                                  });
                                  setShowEditModal(true);
                                }}
                              >
                                <MdEditNote size={20} />
                              </EditButton>
                            </section>
                          </Td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
          </section>

          <TablePagination
            className="h-20 z-0"
            rowsPerPageOptions={[10, 25, 100]}
            component="section"
            count={states?.length || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </section>
      </section>

      <CustomModal
        isModalVisible={showEditModal}
        onClick={() => {
          setShowEditModal(true);
        }}
        closeModal={() => setShowEditModal(false)}
        header="Edit Modal"
      >
        <form className="flex flex-col gap-3" onSubmit={editModal}>
          <CustomSelectDropdown
            onChange={(e) => setEditCountryId(e.targt.value)}
            value={editCountryId}
          >
            {countries?.map((item, index) => (
              <option className="min-h-14" value={item.id} key={index}>
                {item.country}
              </option>
            ))}
          </CustomSelectDropdown>

          <LabelInputEdit
            type="text"
            label="Sub Category"
            onChange={(e) => setEditSates(e.target.value)}
            value={editSates}
          />

          <InputFile
            onChange={(e) => setEditFile(e.target.files[0])}
          />

          <Button
            type="submit"
            className="max-w-[130px] mx-auto bg-butNeel mt-4"
          >
            Save
          </Button>
        </form>
      </CustomModal>
    </>
  );
}
