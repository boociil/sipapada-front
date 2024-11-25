import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

function Example({ open, setOpen, img_link, nama, alias, id}) {
  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();

  const moveKeg = () =>{
    navigate("/Form-keg/" + id)
  }
  const moveDDA = () =>{
    navigate("/dda/" + id)
  }
  const moveRek = () =>{
    navigate("/Rek-Stat/" + id)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 font-poppins" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="img mr-2 flex justify-center row-span-2 col-start-1 row-start-1">
                        <img src={img_link} alt={"gambar"} className="h-14 w-auto md:h-24" />
                    </div>
                    <div className="Title col-span-3 ">
                        <h2 className="text-lg font-semibold text-black text-center">{alias}</h2>
                        <p className="text-gray-600 text-center">{nama}</p>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 justify-center">


                    
                    <button
                            type="button"
                            className="mt-3 mx-2 inline-flex w-full justify-center items-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-inset ring-gray-300 hover:bg-sky-400 sm:mt-0 sm:w-auto"
                            onClick={moveKeg}
                        >
                        Metadata
                    </button>

                    <button
                        type="button"
                        className="mt-3 mx-2 inline-flex w-full justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm  ring-inset ring-gray-300 hover:bg-sky-400 sm:mt-0 sm:w-auto"
                        onClick={moveDDA}
                    >
                        Data Dalam Angka
                    </button>
                    <button
                        type="button"
                        className="mt-3 mx-2 inline-flex w-full justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm  ring-inset ring-gray-300 hover:bg-sky-400 sm:mt-0 sm:w-auto"
                        onClick={moveRek}
                    >
                        Rekomendasi Statistik
                    </button>

                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-center sm:px-6">
                    <button
                        type="button"
                        className="mt-3 mx-2 inline-flex w-full justify-center items-center rounded-md bg-red-500 px-10 py-2 text-sm font-semibold text-white shadow-sm ring-inset ring-gray-300 hover:bg-red-400 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                    >
                        Tutup
                    </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}


export default Example;