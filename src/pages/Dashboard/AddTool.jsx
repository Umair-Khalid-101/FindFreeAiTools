import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { db, doc, setDoc } from "../../services";
import { TagsInput, CategorySelect } from "../../components";

const AddTool = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // FORM VALIDATION
  const formSchema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    link: yup.string().required("Link is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    if (tags.length === 0) {
      return toast.error("Cannot Add Tool without tags!", {
        position: "top-right",
      });
    }

    if (selectedCategory === "") {
      return toast.error("Cannot Add Tool without Tool Category!", {
        position: "top-right",
      });
    }
    setIsLoading(true);
    data.tags = tags;
    data.category = selectedCategory;
    console.log(data);

    await setDoc(doc(db, "tools", Date.now().toString()), data);

    setIsLoading(false);
    toast.success("Tool Added!", {
      position: "top-right",
    });
    reset();
    setTags([]);
    setSelectedCategory("");
  };

  return (
    <>
      <div className="flex min-h-full w-full flex-col justify-center py-2 sm:px-6 lg:px-8">
        <div className="sm:mx-auto w-full">
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
            Add Tool
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto w-full">
          <div className="bg-white pb-12 pt-4 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-3" autoComplete="off">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Title:
                </label>
                <div className="mt-2">
                  <input
                    {...register("title")}
                    autoComplete="off"
                    className={`block w-full rounded-md border-0 py-1.5
                      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                      placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none
                      ${
                        errors?.title
                          ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                          : "focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      } pl-3`}
                    placeholder="Tool Title"
                  />
                  {errors?.title ? (
                    <div className="text-red-500 text-small">
                      {errors?.title?.message}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Description:
                </label>
                <div className="mt-2">
                  <textarea
                    rows={5}
                    {...register("description")}
                    autoComplete="off"
                    className={`block w-full rounded-md border-0 py-1.5
                      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                      placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none
                      ${
                        errors?.description
                          ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                          : "focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      } pl-3`}
                    placeholder="Tool Description"
                  />
                  {errors?.description ? (
                    <div className="text-red-500 text-small">
                      {errors?.description?.message}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Tool Link:
                </label>
                <div className="mt-2">
                  <input
                    {...register("link")}
                    autoComplete="off"
                    className={`block w-full rounded-md border-0 py-1.5
                      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                      placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none
                      ${
                        errors?.link
                          ? "focus:ring-2 focus:ring-inset focus:ring-red-600"
                          : "focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      } pl-3`}
                    placeholder="Tool Link"
                  />
                  {errors?.link ? (
                    <div className="text-red-500 text-small">
                      {errors?.link?.message}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <TagsInput
                tags={tags}
                setTags={setTags}
                inputValue={inputValue}
                setInputValue={setInputValue}
              />

              <CategorySelect
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <div>
                {!isLoading && (
                  <button
                    className="flex w-full justify-center rounded-md bg-buttonRed py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-[#bd2b1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd2b1e]
                    mt-8"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Add Tool
                  </button>
                )}
                {isLoading && (
                  <button
                    disabled=""
                    type="submit"
                    className="flex w-full justify-center items-center gap-2 rounded-md bg-buttonRed py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-[#b12013] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Adding Tool...
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTool;
