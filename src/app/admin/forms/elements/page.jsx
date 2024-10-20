import SwitcherFour from "@/components/Switchers/SwitcherFour";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/Switchers/SwitcherTwo";

export default function FormElement() {
  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-[#E2E8F0] bg-white shadow-default dark:border-[#2E3A47] dark:bg-[#24303F]">
          <div className="border-b border-[#E2E8F0] px-6 py-4 dark:border-[#2E3A47]">
            <h3 className="font-medium text-black dark:text-white">
              Input Fields
            </h3>
          </div>

          <div className="flex flex-col gap-5 p-6">
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Default Input
              </label>
              <input
                type="text"
                placeholder="Default Input"
                className="w-full rounded-lg border-[1.5px] border-[#E2E8F0] bg-[#transparent] px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-[#3d4d60] dark:bg-[#1d2a39] dark:text-white dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Active Input
              </label>
              <input
                type="text"
                placeholder="Active Input"
                className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:bg-[#1d2a39] dark:text-white"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Disabled label
              </label>
              <input
                type="text"
                placeholder="Disabled label"
                disabled
                className="w-full rounded-lg border-[1.5px] border-[#E2E8F0] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-[#3d4d60] dark:bg-[#1d2a39] dark:text-white dark:focus:border-primary dark:disabled:bg-black"
              />
            </div>
          </div>

          <div className="rounded-sm border border-[#E2E8F0] bg-white shadow-default dark:border-[#2E3A47] dark:bg-[#24303F]">
            <div className="border-b border-[#E2E8F0] px-6 py-4 dark:border-[#2E3A47]">
              <h3 className="font-medium text-black dark:text-white">
                Toggle switch input
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <SwitcherOne />
              <SwitcherTwo />
              <SwitcherThree />
              <SwitcherFour />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
